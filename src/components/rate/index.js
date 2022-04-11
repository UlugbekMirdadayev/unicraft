import React from "react";
import { NavLink } from "react-router-dom";
import { PresentBox } from "../export/svg";
import "./rate.scss";
function Rate() {
  const TariffItem = [
    {
      mainTitle: "Начало",
      users: [
        {
          number: "10",
          price: "9900",
        },
        {
          number: "50",
          price: "17100",
        },
      ],
      userTo: "10-50",
      storage: "50 ГБ для хранения данных",
      individual: false,
      integration: false,
      edit: false,
      version: false,
    },
  ];
  return (
    <div className="rate_container">
      <div className="rate">
        <h1>Тарифы</h1>
        <p>
          Сравните пакеты предложений и выберите подходящие возможности и
          стоимость
        </p>
        <div className="tariff_blocks_period">
          <p>Квартал</p>
          <div className="tariff_blocks_period_switch">
            <div className="switch"></div>
          </div>
          <div className="tariff_blocks_period_year">
            <p>Год</p>
            <div className="tariff_img">
              <PresentBox />
            </div>
            <div className="tariff_title_flex">
              <p>2 месяца</p>
              <p>даром</p>
            </div>
          </div>
        </div>
        <div className="tariff_block_item">
          {TariffItem.map((item, index) => {
            return (
              <div key={index} className="tariff_block_card">
                <h1>{item?.mainTitle}</h1>
                <p>Пользователей</p>
                <div className="tariff_card_number">
                  {item?.users.map((user, i) => {
                    return <button key={i}>{user.number}</button>;
                  })}
                </div>
                <div className="tariff_card_price">
                  <h1>9 900 ₽</h1>
                  <h2>за квартал</h2>
                  <p>за пользователя в месяц</p>
                  <button>ЗАКАЗАТЬ</button>
                  <NavLink to={"#"}>Оплатить онлайн</NavLink>
                  <p>10-50 пользователей</p>
                </div>
                <div className="tariff_card_price_bottom">
                  <p>50 ГБ для хранения данных</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rate;
