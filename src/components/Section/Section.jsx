import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

export const Section = ({
  title,
  stats: { good, neutral, bad },
  total,
  percentage,
  push,
}) => {
  return (
    <section>
      {title}
      <FeedbackOptions options="" onLeaveFeedback={push}></FeedbackOptions>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={percentage}
      ></Statistics>
    </section>
  );
};
