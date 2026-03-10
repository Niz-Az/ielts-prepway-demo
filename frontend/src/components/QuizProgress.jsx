function QuizProgress({ currentIndex, totalQuestions }) {
  const currentNumber = currentIndex + 1;
  const percentage = Math.round((currentIndex / totalQuestions) * 100);

  return (
    <section className="progress-wrap">
      <p>
        Question {currentNumber} of {totalQuestions}
      </p>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${percentage}%` }} />
      </div>
    </section>
  );
}

export default QuizProgress;
