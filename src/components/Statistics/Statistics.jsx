import { Notification } from 'components/Notification/Notification';
// import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return total === 0 ? (
    <Notification></Notification>
  ) : (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage}</p>
    </div>
  );
};
