function QuestionCard({ question, selectedOption, onSelectOption }) {
  // This reusable component renders any question object with dynamic options.
  return (
    <section className="card">
      <h2>{question.question}</h2>
      <ul className="option-list">
        {question.options.map((option) => {
          const isSelected = selectedOption === option;

          return (
            <li key={option}>
              <button
                type="button"
                className={isSelected ? 'option selected' : 'option'}
                onClick={() => onSelectOption(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionCard;
