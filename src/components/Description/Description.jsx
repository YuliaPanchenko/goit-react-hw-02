import React from "react";
import style from "../Description/Description.module.css";

const Description = () => {
  return (
    <div className={style.desWrap}>
      <h2 className={style.desTitle}>Sip Happens Café</h2>
      <p className={style.desText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
