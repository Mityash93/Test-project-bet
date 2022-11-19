import React from "react";
import s from './Intro.module.scss';
import Button from '../../shared/Button/Button'

const Intro = () => {
  return (
    <section className={s.intro}>
      <div className="container">
        <div className={s.intro__content}>
          <h1 className={s.intro__title}>
            <span className={s.blue}>Lorem ipsum</span> dolor sit <br />
            amet consectetur
            <span className={s.blue}> adipiscing</span>
          </h1>
          <h6 className={s.intro__description}>
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h6>
          <ul className={s.intro__list}>
            <li className={s.intro__item}>Totam rem aperiam eaque ipsa</li>
            <li className={s.intro__item}>
              Sit voluptatem accusantium doloremque laudantium
            </li>
            <li className={s.intro__item}>
              Sed ut perspiciatis, unde omnis iste natus error
            </li>
          </ul>
          <div className={s.intro__actions}>
            <Button text={'заказать'} description={'blue'} />
            <Button text={'подробнее'} description={'white'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
