import React from "react";
import document from "../../assets/images/document.svg";
import message from "../../assets/images/message.svg";
import money from "../../assets/images/money.svg";
import percent from "../../assets/images/percent.svg";
import search from "../../assets/images/search.svg";
import OrderForm from "../OrderForm/OrderForm";
import s from "./Order.module.scss";
import OrderProcess from "./OrderProcess";

const Order = () => {
  return (
    <section className={s.order} id="order">
      <div className="container">
        <div className={s.order__content}>
          <h2 className={s.order__heading}>
            Оформление <span className={s.order__heading_blue}>Заказа</span>
          </h2>
          <span className={s.order__description}>
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </span>
          
          <ul className={s.order__list} >
            <OrderProcess img={search} text={'Lorem ipsum dolorsit amet'} />
            <OrderProcess img={percent} text={'Сonsecteturadipiscing elit'} />
            <OrderProcess img={document} text={'Sed do eiusmod tempor'} />
            <OrderProcess img={message} text={'Esse cillum doloreeu fugiat'} />
            <OrderProcess img={money} text={'Excepteur sint occaecat cupidatat non proident'} />
          </ul>
            <OrderForm/>
        </div>
      </div>
    </section>
  );
};

export default Order;


// &__list {
//   display: flex;
//   justify-content: space-between;
//   gap: 30px;
//   margin-bottom: 80px;
//   position: relative;
//   flex-wrap: wrap;
//   @media screen and (max-width: 1200px) {
//     justify-content: center;
//     gap: 30px;
//   }
// }

// &-list {
//   @media screen and (max-width: 720px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//   }
//   @media screen and (max-width: 480px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
//   &__item {
//     position: relative;
//     z-index: 1;
//     flex-shrink: 0;
//     & .dots {
//       display: flex;
//       gap: 20px;
//       position: absolute;
//       top: 47px;
//       left: 160px;
//       z-index: -1;
//       &__item {
//         width: 6px;
//         height: 6px;
//         border-radius: 50%;
//         background-color: var(--white);
//       }
//     }
//     &:nth-child(5n) {
//       .dots {
//         display: none;
//         @media screen and (max-width: 1059px) {
//           display: flex;
//         }
//         @media screen and (max-width: 720px) {
//           display: none;
//         }
//       }
//     }
//     &:nth-child(4n) {
//       .dots {
//         @media screen and (max-width: 1059px) {
//           display: none;
//         }
//         @media screen and (max-width: 839px) {
//           display: flex;
//         }
//         @media screen and (max-width: 720px) {
//           display: none;
//         }
//       }
//     }
//     &:nth-child(3n) {
//       .dots {
//         @media screen and (max-width: 839px) {
//           display: none;
//         }
//       }
//     }
//     &:last-child {
//       .dots {
//         display: none;
//       }
//     }
//     @media screen and (max-width: 720px) {
//       .dots {
//         display: none;
//       }
//     }
//   }
//   &__dots {
//     display: flex;
//     justify-content: space-between;
//     position: absolute;
//     padding: 0 60px;
//     transform: translateX(-50%);
//     left: 50%;
//     top: 47px;
//     width: 100%;
//     & span {
//       display: block;
//       width: 6px;
//       height: 6px;
//       border-radius: 50%;
//       background-color: #fff;
//     }
//     @media screen and (max-width: 1200px) {
//       display: none;
//     }
//   }
// }
// }

// .order-list__item {
// }