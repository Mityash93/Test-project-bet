import React, { useState } from "react";

const SelectItem = ({open, hidden}) => {

    const [text, setText] = useState("Выберите тип системы");

    const chooseText = (e) => {
        setText(e.target.innerText)
    }

  return (
    <>
      <div className={open}>
        <span>{text}</span>
      </div>
      <ul onClick={chooseText} className={hidden}>
        <li>Hello</li>
        <li>my</li>
        <li>world</li>
      </ul>
    </>
  );
};

export default SelectItem;




