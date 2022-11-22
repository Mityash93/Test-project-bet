import React from "react";
import "./Button.scss";

const Button = ({ text, className }) => {
  return (
    <>
      <button type="submit" className={`button__main ${className}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
