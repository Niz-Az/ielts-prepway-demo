import { useMemo, useState } from 'react';
import QuestionCard from './components/QuestionCard';
import QuizProgress from './components/QuizProgress';
import CompletionSummary from './pages/CompletionSummary';
import sampleQuestions from '../../sample-data/reading-questions.json';

function App() {
  // App-level state tracks quiz navigation and selected answers.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const currentQuestion = sampleQuestions[currentIndex];
  const totalQuestions = sampleQuestions.length;

  const isComplete = currentIndex >= totalQuestions;

  const score = useMemo(() => {
    return sampleQuestions.reduce((total, question, index) => {
      return selectedAnswers[index] === question.correct ? total + 1 : total;
    }, 0);
  }, [selectedAnswers]);

  const handleSelectOption = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: option }));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalQuestions));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
  };

  if (isComplete) {
    return (
      <CompletionSummary
        totalQuestions={totalQuestions}
        score={score}
        selectedAnswers={selectedAnswers}
        questions={sampleQuestions}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <main className="app-shell">
      <h1>IELTS Prepway — Public Demo</h1>
      <p className="subtitle">Sample reading flow with local JSON data only.</p>

      <QuizProgress currentIndex={currentIndex} totalQuestions={totalQuestions} />

      <QuestionCard
        question={currentQuestion}
        selectedOption={selectedAnswers[currentIndex]}
        onSelectOption={handleSelectOption}
      />

      <section className="navigation-row">
        <button type="button" onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!selectedAnswers[currentIndex]}
        >
          {currentIndex === totalQuestions - 1 ? 'Finish Demo Quiz' : 'Next'}
        </button>
      </section>
    </main>
  );
}

export default App;
