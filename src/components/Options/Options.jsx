import style from "../Options/Options.module.css";
import React from "react";

const Options = ({ onFeedbacksAdd, total }) => {
  return (
    <div className={style.optionWrap}>
      <button
        className={style.optionBtn}
        type="button"
        onClick={() => onFeedbacksAdd("good")}
      >
        Good
      </button>
      <button
        className={style.optionBtn}
        type="button"
        onClick={() => onFeedbacksAdd("neutral")}
      >
        Neutral
      </button>
      <button
        className={style.optionBtn}
        type="button"
        onClick={() => onFeedbacksAdd("bad")}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          className={style.optionBtn}
          type="button"
          onClick={() => onFeedbacksAdd("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
