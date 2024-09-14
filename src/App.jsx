import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Descriptio/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const myReview = window.localStorage.getItem("my-review");
  const [review, setRewiew] = useState(() => {
    if (myReview !== null) {
      return JSON.parse(myReview);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("my-review", JSON.stringify(review));
  }, [review]);

  const updateFeedback = (feedbackType) => {
    setRewiew({ ...review, [feedbackType]: review[feedbackType] + 1 });
  };

  const resetFeedback = (reset) => {
    setRewiew({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = review.good + review.neutral + review.bad;
  const positive = Math.round((review.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        update={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback review={review} total={totalFeedback} positive={positive} />
      )}
    </>
  );
}

export default App;
