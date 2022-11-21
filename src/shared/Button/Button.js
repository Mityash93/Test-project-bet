import React from "react";
import "./Button.scss";

const Button = ({ text, description, className }) => {
  return (
    <>
      {description === "blue" ? (
        <button type="submit" className={`button__main ${className}`}>
          {text}
        </button>
      ) : (
        <button type="submit" className={`button__main ${className}`}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
