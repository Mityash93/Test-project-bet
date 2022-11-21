import React from "react";
import "./OrderProcess.scss";
import Point from "./Point";

const OrderProcess = ({ img, text }) => {
  return (
    <li className="order-list">
      <div className="order-list__step">
        <div className="order-list__img">
          <img src={img} alt={text} />
        </div>
        <div className="order-list__text" >{text}</div>
        <ul className="order-list__points" >
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
