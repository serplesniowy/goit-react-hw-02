import React, { useState, useEffect } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
      localStorage.removeItem("feedback");
      return;
    }

    setFeedback((prevFeedback) => {
      const updatedFeedback = {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
      localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
      return updatedFeedback;
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options feedback={feedback} updateFeedback={updateFeedback} />
      {totalFeedback > 0 ? <Feedback feedback={feedback} /> : <Notification />}
    </div>
  );
}

export default App;
