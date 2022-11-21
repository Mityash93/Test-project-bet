import React from "react";
import "./Input.scss";

const Input = ({name, placeholder}) => {
  return (
    <label className="form-top__input input" name={name} placeholder={placeholder}>
      <input
        className="input__content"
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
