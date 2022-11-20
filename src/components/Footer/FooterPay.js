import React from "react";
import s from './FooterPay.module.scss';

const FooterPay = ({img, text}) => {
  return (
    <li className={s.footer__pay_item}>
      <img src={img} alt={text} />
      <span>{text}</span>
    </li>
  );
};

export default FooterPay;
