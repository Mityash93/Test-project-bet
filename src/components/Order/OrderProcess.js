import React from "react";
import s from "./OrderProcess.module.scss";
import Point from "./Point";

const OrderProcess = ({ img, text }) => {
  return (
    <li className={s.order__item}>
      <div className={s.order__item_step}>
        <div className={s.order__item_img}>
          <img src={img} alt={text} />
        </div>
        <div className={s.order__item_text} >{text}</div>
        <ul className={s.order__item_points} >
            <Point/>
            <Point/>
            <Point/>
            <Point/>
            <Point/>
        </ul>
      </div>
    </li>
  );
};

export default OrderProcess;
