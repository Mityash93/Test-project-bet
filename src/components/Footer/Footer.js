import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__content}>
          <span className={s.footer__label}>
            © 2018 «LOREMIPSUM.NET» Все права защищены.
          </span>
          <div className={s.footer__content_line}></div>
          <ul className={s.footer__pay}>
            <li className={s.footer__pay_first}>
              <span>Qiwi wallet</span>
            </li>
            <li className={s.footer__pay_second}>
              <span>Yandex Money</span>
            </li>
            <li className={s.footer__pay_third}>
              <span>Web Money</span>
            </li>
          </ul>
          <div className={s.footer__content_line}></div>
          <ul className={`${s.footer__contacts} ${s.footer_contacts}`}>
            <li className={s.footer__contacts_first}>
              <a href="mailto:info@ipsum228.com">
                <span> info@ipsum228.com </span>
              </a>
            </li>
            <li className={s.footer__contacts_second}>
              <a href="https://vk.com/">
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
