import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      type="button"
      className={css.feedback}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;
