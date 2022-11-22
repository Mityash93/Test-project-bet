import React from "react";
import document from "../../assets/images/document.svg";
import message from "../../assets/images/message.svg";
import money from "../../assets/images/money.svg";
import percent from "../../assets/images/percent.svg";
import search from "../../assets/images/search.svg";
import OrderForm from "../OrderForm/OrderForm";
import "./Order.scss";
import OrderProcess from "./OrderProcess";

const Order = () => {
  return (
    <section className="order">
      <div className="container">
        <div className="order__content">
          <h2 className="order__heading">
            Оформление <span className="order__heading-blue">Заказа</span>
          </h2>
          <span className="order__description">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </span>
          
          <ul className="order__list" >
            <OrderProcess img={search} text={'Lorem ipsum dolorsit amet'} />
            <OrderProcess img={percent} text={'Сonsecteturadipiscing elit'} />
            <OrderProcess img={document} text={'Sed do eiusmod tempor'} />
            <OrderProcess img={message} text={'Esse cillum doloreeu fugiat'} />
            <OrderProcess img={money} text={'Excepteur sint occaecat cupidatat non proident'} />
          </ul>
            <OrderForm/>
        </div>
      </div>
    </section>
  );
};

export default Order;

