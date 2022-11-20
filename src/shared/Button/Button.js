import React from "react";
import s from "./Button.module.scss";

const Button = ({ text, description }) => {
  return (
    <div>
      {description === "blue" ? (
        <button type="submit" className={`${s.button} ${s.button__blue}`}>
          {text}
        </button>
      ) : (
        <button type="submit" className={`${s.button} ${s.button__white}`}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
