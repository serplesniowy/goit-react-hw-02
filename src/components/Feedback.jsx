import React from "react";

function Feedback({ feedback }) {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = Math.round(
    ((good + neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
