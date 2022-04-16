import React from "react";
import { NavLink } from "react-router-dom";
import { PresentBox, Search } from "../export/svg";
import "./rate.scss";
import { RegisterModal } from "./../export/modal";

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
    individual: false,
    integration: false,
    edit: false,
    version: false,
  },
  {
    mainTitle: "Оптимум",
    users: [
      {
        number: 100,
        price: 42600,
      },
      {
        number: 500,
        price: 57300,
      },
    ],
    userTo: "100-500",
    storage: false,
    individual: true,
    integration: true,
    edit: false,
    version: false,
  },
  {
    mainTitle: "Бизнес",
    users: [
      {
        number: 1000,
        price: 86700,
      },
      {
        number: 5000,
        price: 172200,
      },
    ],
    userTo: "10-50",
    storage: false,
    individual: true,
    integration: true,
    edit: true,
    version: true,
  },
];

function Rate() {
  const [search, setSearch] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  function priceUser(price, number) {
    return Math.floor(Number(price) / Number(number) / 3);
  }
  const [tariffYear, setTariffYear] = React.useState(false);

  return (
    <div className="rate_container" id="price">
      <RegisterModal open={openModal} setOpen={setOpenModal} />
      <div className="rate">
        <h1>Тарифы</h1>
        <p>
          Сравните пакеты предложений и выберите подходящие возможности и
          стоимость
        </p>
        <div className="tariff_blocks_period">
          <p>Квартал</p>
          <label className="switch">
            <input type="checkbox" id="tariff_blocks_period_year" />
            <span
              className="slider round"
              onClick={() => setTariffYear(!tariffYear)}
            />
          </label>

          <label
            htmlFor="tariff_blocks_period_year"
            className="tariff_blocks_period_year"
          >
            <p onClick={() => setTariffYear(!tariffYear)}>Год</p>
            <div
              className="tariff_img"
              onClick={() => setTariffYear(!tariffYear)}
            >
              <PresentBox />
            </div>
            <div
              className="tariff_title_flex"
              onClick={() => setTariffYear(!tariffYear)}
            >
              <p>2 месяца</p>
              <p>даром</p>
            </div>
          </label>
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
                        <p>
                          {tariffYear && (
                            <span className="price__skidka">
                              {((Number(user?.price) / 3) * 12).toFixed(0)}
                            </span>
                          )}
                          <br />
                          {`${
                            (Number(user?.price) / (tariffYear ? 3 : 1)) *
                            (tariffYear ? 10 : 1)
                          }₽`}
                        </p>
                      </h1>
                    );
                  })}
                  <h2>за квартал</h2>
                  <div className="user__price__months">
                    {item?.users.map(({ price, number }) => {
                      return (
                        <p key={number}>
                          {priceUser(price, number)} за пользователя в месяц
                        </p>
                      );
                    })}
                  </div>
                  <button onClick={() => setOpenModal(!openModal)}>
                    ЗАКАЗАТЬ
                  </button>
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
          <div className="tariff_block_card">
            <input
              type="radio"
              id={"korporativ"}
              className={"tariff_block_card_radio first"}
              defaultChecked
            />

            <h1>Корпорация</h1>
            <p>Пользователей</p>
            <div className="tariff_card_number">
              <button>
                <label htmlFor={"korporativ"}> {"> 5 000"}</label>
              </button>
            </div>
            <div className="tariff_card_price">
              <h1>
                <p>По запросу</p>
              </h1>
              <div className="user__price__months">
                <p> От 9 ₽ за пользователя в месяц</p>
              </div>
              <button onClick={() => setOpenModal(!openModal)}>ЗАКАЗАТЬ</button>
            </div>
            <div className="tariff_card_price_bottom">
              <p>{"> 5000 пользователей"}</p>
              <p>{"Безлимитное хранилище"}</p>
              <p>{"Индивидуальный стиль"}</p>
              <p>{"Интеграции"}</p>
              <p>{"Спец. тарифы на доработки"}</p>
              <p>{"Box-версия (опционально)"}</p>
            </div>
          </div>
        </div>
        <div className="tariff_block_change" id="features">
          <h1>Вне зависимоcти от выбранного тарифа, вы получите</h1>
          <div className="tariff_features_forall">
            <div className="tariff_features_forall_col">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                  <div key={index} className="tariff_features_forall_item">
                    <div className="label_____text__">
                      Неограниченное количество курсов
                    </div>
                    <span
                      className="tariff_features_forall_item_question"
                      data-tooltip="Создавайте столько курсов, сколько вам необходимо"
                    />
                    <div className="before">
                      <span>?</span>
                      <div className="before_tooltip">
                        Вы сможете создавать курсы из любого количества уроков:
                        видео, аудио, текст с картинками, загружать документы,
                        импортировать страницы из Google, группировать курсы по
                        разделам. Добавлять пользователей и выбирать им роли,
                        назначать на них любые учебные курсы и отслеживать
                        успеваемость с помощью статистики
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
                    <div className="label_____text__">
                      Неограниченное количество курсов
                    </div>
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
        <div className="tariff_block_search" id="faq">
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
