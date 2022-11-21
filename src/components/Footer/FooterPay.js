import React from "react";
import './FooterPay.scss';

const FooterPay = ({img, text}) => {
  return (
    <li className="footer__pay-item">
      <img src={img} alt={text} />
      <span>{text}</span>
    </li>
  );
};

export default FooterPay;
