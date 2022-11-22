import React from "react";
import "./Header.scss";


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo-wrapper">
            <span className="header__logo-white">LoremIpsum.</span>
            <span className="header__logo-blue">Net</span>
          </div>
          <nav className="header__nav header-nav">
            <ul className="header-nav__list">
              <li>
                <a href="/" className="header-nav__item">
                  Бизнес
                </a>
              </li>
              <li>
                <a href="/" className="header-nav__item">
                  О нас
                </a>
              </li>
              <li>
                <a href="/" className="header-nav__item">
                  Цены
                </a>
              </li>
              <li>
                <a href="/order" className="header-nav__item">
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
