export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        type="button"
        name="good"
        onClick={e => onLeaveFeedback(e.currentTarget.name)}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={e => onLeaveFeedback(e.currentTarget.name)}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={e => onLeaveFeedback(e.currentTarget.name)}
      >
        Bad
      </button>
    </div>
  );
};
