import React from "react";
import { NavLink } from "react-router-dom";
import { CheckMark, PresentBox, Search } from "../export/svg";
import "./rate.scss";
function Rate() {
  const [search, setSearch] = React.useState("");
  function priceUser(price, number) {
    return Math.floor(Number(price) / Number(number) / 3);
  }

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
      storage: true,
      individual: true,
      integration: false,
      edit: false,
      version: false,
    },
    {
      mainTitle: "Оптимум",
      users: [
        {
          number: "100",
          price: "42600",
        },
        {
          number: "500",
          price: "57 300",
        },
      ],
      userTo: "100-500",
      storage: false,
      individual: true,
      integration: false,
      edit: false,
      version: false,
    },
    {
      mainTitle: "Бизнес",
      users: [
        {
          number: "1000",
          price: "86 700",
        },
        {
          number: "5000",
          price: "172 200 ",
        },
      ],
      userTo: "10-50",
      storage: false,
      individual: true,
      integration: false,
      edit: false,
      version: false,
    },
    {
      mainTitle: "Корпорация",
      users: [
        {
          number: "5000",
          price: "По запросу",
        },
        {
          number: "500",
          price: "44444",
        },
      ],
      userTo: "10-50",
      storage: false,
      individual: true,
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
                {item?.users.map((user, i) => {
                  return (
                    <input
                      key={i}
                      defaultChecked={i === 0}
                      type="radio"
                      name={item?.mainTitle}
                      id={user?.price}
                      className={`tariff_block_card_radio ${
                        i === 0 ? "first" : "second"
                      } `}
                    />
                  );
                })}
                <h1>{item?.mainTitle}</h1>
                <p>Пользователей</p>
                <div className="tariff_card_number">
                  {item?.users.map((user, i) => {
                    return (
                      <button key={i}>
                        <label htmlFor={user?.price}>{user?.number}</label>
                      </button>
                    );
                  })}
                </div>
                <div className="tariff_card_price">
                  {item?.users.map((user, i) => {
                    return (
                      <h1 key={i}>
                        <p>{user?.price}</p>
                      </h1>
                    );
                  })}
                  <h2>за квартал</h2>{" "}
                  <div className="user__price__months">
                    {item?.users.map(({ price, number }) => {
                      return (
                        <p key={number}>
                          {priceUser(price, number)} за пользователя в месяц
                        </p>
                      );
                    })}
                  </div>
                  <button>ЗАКАЗАТЬ</button>
                  <NavLink to={"#"}>Оплатить онлайн</NavLink>
                </div>
                <div className="tariff_card_price_bottom">
                  <p>{item?.userTo} пользователей</p>
                  <p>
                    {item?.storage
                      ? "50 ГБ для хранения данных"
                      : "Безлимитное хранилище"}
                  </p>
                  <p>{item?.individual && "Индивидуальный стиль"}</p>
                  <p>{item?.integration && "Интеграции"}</p>
                  <p>{item?.edit && "Спец. тарифы на доработки"}</p>
                  <p>{item?.version && "Box-версия (опционально)"}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="tariff_block_change">
          <h1>Вне зависимоcти от выбранного тарифа, вы получите</h1>
          <div className="tariff_features_forall">
            <div className="tariff_features_forall_col">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return (
                  <div key={index} className="tariff_features_forall_item">
                    <CheckMark />
                    Неограниченное количество курсов
                    <span
                      className="tariff_features_forall_item_question"
                      data-tooltip="Создавайте столько курсов, сколько вам необходимо"
                    />
                    <div className="before">
                      ?
                      <div className="before_tooltip">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="tariff_features_forall_col">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                  <div key={index} className="tariff_features_forall_item">
                    <CheckMark />
                    Неограниченное количество курсов
                    <span
                      className="tariff_features_forall_item_question"
                      data-tooltip="Создавайте столько курсов, сколько вам необходимо"
                    />
                    <div className="before">
                      ?
                      <div className="before_tooltip">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tariff_block_search">
          <h1>Часто задаваемые вопросы</h1>
          <p>
            Мы собрали ответы на самые популярные вопросы: сколько стоит, какие
            условия, технические нюансы и многое другое.
          </p>
          <label>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(search);
              }}
              value={search}
              type="text"
              placeholder="Что хотите узнать?"
            />
            <Search />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Rate;
