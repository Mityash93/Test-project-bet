import React from "react";
import "./Input.scss";

const Input = ({name, placeholder, type}) => {
  return (
    <label className="form-top__input input" name={name} placeholder={placeholder} type={type}>
      <input
        className="input__content"
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
};

export default Input;
