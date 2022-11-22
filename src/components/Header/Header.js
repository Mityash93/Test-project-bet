import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"


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
                <Link to="/" className="header-nav__item">
                  Бизнес
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="header-nav__item">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/price" className="header-nav__item">
                  Цены
                </Link>
              </li>
              <li>
                <a href="/#order" className="header-nav__item">
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
