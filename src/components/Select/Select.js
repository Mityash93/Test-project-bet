import React, { useState } from "react";
import "./Select.scss";
import SelectItem from "./SelectItem";

const Select = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="form-top__select select" onClick={toggle}>
      {open ? (
        <SelectItem open={"select__content"} hidden={"select__item select__item_hidden"} />
      ) : (
        <SelectItem open={"select__content_open"} hidden={"select__item"} />
      )}
    </div>
  );
};

export default Select;







// <>
        //   <div className="select__content">
        //     <span>Выберите тип системы</span>
        //   </div>
        //   <ul className="select__item select__item_hidden">
        //     <li>Hello</li>
        //     <li>my</li>
        //     <li>world</li>
        //   </ul>
        // </>


        // <>
        //   <div className="select__content_open">
        //     <span>Выберите тип системы</span>
        //   </div>
        //   <ul className="select__item">
        //     <li>Hello</li>
        //     <li>my</li>
        //     <li>world</li>
        //   </ul>
        // </>