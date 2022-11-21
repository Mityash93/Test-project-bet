import React from "react";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import Select from "../../shared/Select/Select";
import "./OrderForm.scss";

const OrderForm = () => {
  return (
    <form action="#" className="order__form order-form">
      <div className="order-form__top form-top">
        <Select />
        <Input name={"email"} placeholder={"Ваше e-mail"} />
        <Input name={"name"} placeholder={"Ваше имя"} />
      </div>
      <div className="order-form__middle form-middle">
        <div className="order-form__diapazon">
          <div className="order-form__title">
            <span>Sed ut perspiciatis, unde omnis iste natus</span>
            <span>75 %</span>
          </div>
          <Input name={"percent"} type={"range"} />
        </div>
        <label className="order-form__file" >
          Прикрепить файл
          <input type="file" />
        </label>
      </div>
      <div className="order-form__button button">
        <Button
          text={"отправить"}
          description={"blue"}
          className={"button__main_blue-long"}
        />
      </div>
    </form>
  );
};

export default OrderForm;
