import React from "react";
import style from "../Feedback/Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={style.fbWrap}>
      <ul className={style.fbList}>
        <li className={style.fbItem}>Good: {good}</li>
        <li className={style.fbItem}>Neutral: {neutral}</li>
        <li className={style.fbItem}>Bad: {bad}</li>
        <li className={style.fbItem}>Total: {total}</li>
        <li className={style.fbItem}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
