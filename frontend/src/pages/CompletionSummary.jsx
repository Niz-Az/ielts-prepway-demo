function CompletionSummary({ totalQuestions, score, selectedAnswers, questions, onRestart }) {
  // Summary page is a simple route-like view controlled by parent state.
  return (
    <main className="app-shell">
      <h1>Demo Complete</h1>
      <p>
        You answered {score} out of {totalQuestions} sample questions correctly.
      </p>

      <section className="card">
        <h2>Answer Review</h2>
        <ul className="review-list">
          {questions.map((question, index) => {
            const selected = selectedAnswers[index] || 'No answer';
            const isCorrect = selected === question.correct;

            return (
              <li key={question.question} className={isCorrect ? 'correct' : 'incorrect'}>
                <strong>Q{index + 1}:</strong> {question.question}
                <br />
                <span>Your answer: {selected}</span>
                <br />
                <span>Correct answer: {question.correct}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <button type="button" onClick={onRestart}>
        Restart Demo
      </button>
    </main>
  );
}

export default CompletionSummary;
