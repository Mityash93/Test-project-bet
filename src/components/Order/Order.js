import React from "react";
import Button from "../../shared/Button/Button";
import s from "./Order.module.scss";

const Order = () => {
  return (
    <section className={s.order} id="order">
      <div className="container">
        <div className={s.order__content}>
          <h2 className={s.order__heading}>
            Оформление <span className={s.order__heading_blue}>Заказа</span>
          </h2>
          <span className={s.order__description}>
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </span>
        </div>
        <div className={s.order__button}>
          <Button text={"отправить"} description={"blue"} />
        </div>
      </div>
    </section>
  );
};

export default Order;
