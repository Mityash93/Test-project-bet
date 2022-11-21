import React from "react";
import "./Intro.scss";
import Button from "../../shared/Button/Button";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__content">
          <h1 className="intro__title">
            <span className="intro__title-blue">Lorem ipsum</span> dolor sit
            <br />
            amet consectetur
            <span className="intro__title-blue"> adipiscing</span>
          </h1>
          <h6 className="intro__description">
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h6>
          <ul className="intro__list">
            <li className="intro__list-item">Totam rem aperiam eaque ipsa</li>
            <li className="intro__list-item">
              Sit voluptatem accusantium doloremque laudantium
            </li>
            <li className="intro__list-item">
              Sed ut perspiciatis, unde omnis iste natus error
            </li>
          </ul>
          <div className="intro__actions button">
            <Button
              text={"заказать"}
              description={"blue"}
              className={"button__main_blue"}
            />
            <Button
              text={"подробнее"}
              description={"white"}
              className="button__main_white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
