import React from "react";
import "./Footer.scss";
import qiwi from "../../assets/images/qiwi.svg";
import money from "../../assets/images/web-money.svg";
import yandex from "../../assets/images/yandex-money.svg";
import mail from "../../assets/images/mail.svg";
import vk from "../../assets/images/vk.svg";
import FooterPay from "./FooterPay";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <span className="footer__label">
            © 2018 «LOREMIPSUM.NET» Все права защищены.
          </span>
          <div className="footer__divider"></div>
          <ul className="footer__pay">
            <FooterPay img={qiwi} text={"Qiwi wallet"} />
            <FooterPay img={yandex} text={"Yandex Money"} />
            <FooterPay img={money} text={"Web Money"} />
          </ul>
          <div className="footer__divider"></div>
          <ul className="footer__contacts">
            <li>
              <a href="mailto:info@ipsum228.com">
                <img src={mail} alt="mail" />
                <span> info@ipsum228.com </span>
              </a>
            </li>
            <li>
              <a href="https://vk.com/">
                <img src={vk} alt="vk" />
                <span>Мы вконтакте</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
