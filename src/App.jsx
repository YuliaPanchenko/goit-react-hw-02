import "./App.css";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  const [options, setOptions] = useState(() => {
    const storedOptions = window.localStorage.getItem("optionValue");
    if (storedOptions) {
      return JSON.parse(storedOptions);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const total = options.good + options.neutral + options.bad;
  const positiveFeedback = Math.round((options.good / total) * 100);

  const onFeedbacksAdd = (feedbacksName) => {
    if (feedbacksName === "reset") {
      setOptions({ good: 0, neutral: 0, bad: 0 });
    } else {
      setOptions({ ...options, [feedbacksName]: options[feedbacksName] + 1 });
    }
  };

  useEffect(() => {
    window.localStorage.setItem("optionValue", JSON.stringify(options));
  }, [options]);

  return (
    <>
      <Description />
      <Options onFeedbacksAdd={onFeedbacksAdd} total={total} />
      {total === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
