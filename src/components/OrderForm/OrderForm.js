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
        <div class="order-form__diapazon">
          <div class="order-form__title">
            <span>Sed ut perspiciatis, unde omnis iste natus</span>
            <span>75 %</span>
          </div>
          <main-input name="percent" type="range" />
        </div>
        <label class="order-form__file" for="order-file">
          Прикрепить файл
          <input type="file" id="order-file" />
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
