import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__content}>
          <div className={s.header__logo}>
            <span className={s.header__logo_white}>LoremIpsum.</span>
            <span className={s.header__logo_blue}>Net</span>
          </div>
          <nav className={s.header__nav}>
            <ul className={s.header__nav_list}>
              <li>
                <Link to="/" className={s.header__nav_item}>
                  Бизнес
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className={s.header__nav_item}>
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/Price" className={s.header__nav_item}>
                  Цены
                </Link>
              </li>
              <li>
                <a href="/#order" className={s.header__nav_item}>
                  Оформить заказ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
