import React from "react";
import "./ourTeam.css";

function OurTeam() {
  return (
    <div>
      <section className="container_section clients" id="customerreview">
        <div className="row tac">
          <h2>Отзывы наших клиентов</h2>
        </div>
        <div className="row">
          <div className="customerreview">
            <div className="customerreview_nav">
              <button
                className="customerreview_nav_arrow customerreview_nav_arrow--prev"
                onclick="toggleReviewNext('prev')"
                aria-label="Предыдущий отзыв"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="28px"
                  height="53px"
                >
                  <path
                    fillRule="evenodd"
                    fill="currentcolor"
                    d="M28.006,1.478 L2.946,26.648 L27.711,51.521 L26.237,53.002 L-0.001,26.648 L1.472,25.167 L1.473,25.168 L26.531,-0.002 L28.006,1.478 Z"
                  />
                </svg>
              </button>
              <button
                className="customerreview_nav_arrow customerreview_nav_arrow--next"
                onclick="toggleReviewNext('next')"
                aria-label="Предыдущий отзыв"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="28px"
                  height="53px"
                >
                  <path
                    fillRule="evenodd"
                    fill="currentcolor"
                    d="M26.528,27.833 L26.528,27.832 L1.468,53.002 L-0.006,51.521 L25.054,26.352 L0.289,1.478 L1.763,-0.002 L28.002,26.352 L26.528,27.833 Z"
                  />
                </svg>
              </button>
              <div className="customerreview_nav_list" id="reviewsNavList">
                <div
                  className="customerreview_nav_wrapper"
                  id="reviewsNavWrapper"
                  style={{ transform: "translate3d(-117rem, 0px, 0px)" }}
                >
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(0)"
                    data-id={0}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Никитин Сергей Петрович — ФК Импульс"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(1)"
                    data-id={1}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Хитрина Наталья Александровна — Компания “Аптека Вита”"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(2)"
                    data-id={2}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Заболотная Светлана Михайловна — АО Талап"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(3)"
                    data-id={3}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Дилдора Турсунова — Perfect Counsulting Group"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(4)"
                    data-id={4}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Алексей Молчанов — Envybox"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(5)"
                    data-id={5}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Валерий Горячев — Evolution management"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(6)"
                    data-id={6}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Илья Кусакин — Люди Дела"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(7)"
                    data-id={7}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Светлана Керимова — Woman Insight"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(8)"
                    data-id={8}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Валентин Нам — Окна Юг"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(9)"
                    data-id={9}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Наталья Мельникова — ЛОЭСК"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(10)"
                    data-id={10}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Алексей Коган — Открытая мобильная платформа"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(11)"
                    data-id={11}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Куринский Андрей Викторович — LogicPower"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(12)"
                    data-id={12}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Юлия Шабанина — Дядюшка Плинтус"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(13)"
                    data-id={13}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Константин Мосин — Инсайт"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(14)"
                    data-id={14}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Альфред Бадгиев — ООО ЛТ Глобал Форвардинг"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(15)"
                    data-id={15}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Руслан Шмаков — РИО Транс"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(16)"
                    data-id={16}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Ольга Кузьменкова — Elite Class"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(17)"
                    data-id={17}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Нина Поляничева — GoFortune"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(18)"
                    data-id={18}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Кристина Лысенко — Автозайм"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(19)"
                    data-id={19}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Наталья Кондратенко — Company"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item active"
                    onclick="onClickReviewNav(0)"
                    data-nav-id="reviewsnav_0"
                    data-id={0}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Никитин Сергей Петрович — ФК Импульс"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(1)"
                    data-nav-id="reviewsnav_1"
                    data-id={1}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Хитрина Наталья Александровна — Компания “Аптека Вита”"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(2)"
                    data-nav-id="reviewsnav_2"
                    data-id={2}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Заболотная Светлана Михайловна — АО  Талап"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(3)"
                    data-nav-id="reviewsnav_3"
                    data-id={3}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Дилдора Турсунова — Perfect Counsulting Group"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(4)"
                    data-nav-id="reviewsnav_4"
                    data-id={4}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Алексей Молчанов — Envybox"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(5)"
                    data-nav-id="reviewsnav_5"
                    data-id={5}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Валерий Горячев — Evolution management"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(6)"
                    data-nav-id="reviewsnav_6"
                    data-id={6}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Илья Кусакин — Люди Дела"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(7)"
                    data-nav-id="reviewsnav_7"
                    data-id={7}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Светлана Керимова — Woman Insight"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(8)"
                    data-nav-id="reviewsnav_8"
                    data-id={8}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Валентин Нам — Окна Юг"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(9)"
                    data-nav-id="reviewsnav_9"
                    data-id={9}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Наталья Мельникова — ЛОЭСК"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(10)"
                    data-nav-id="reviewsnav_10"
                    data-id={10}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Алексей Коган — Открытая мобильная платформа"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(11)"
                    data-nav-id="reviewsnav_11"
                    data-id={11}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Куринский Андрей Викторович — LogicPower"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(12)"
                    data-nav-id="reviewsnav_12"
                    data-id={12}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Юлия Шабанина — Дядюшка Плинтус"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(13)"
                    data-nav-id="reviewsnav_13"
                    data-id={13}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Константин Мосин — Инсайт"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(14)"
                    data-nav-id="reviewsnav_14"
                    data-id={14}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Альфред Бадгиев — ООО ЛТ Глобал Форвардинг"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(15)"
                    data-nav-id="reviewsnav_15"
                    data-id={15}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Руслан Шмаков — РИО Транс"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(16)"
                    data-nav-id="reviewsnav_16"
                    data-id={16}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Ольга Кузьменкова — Elite Class"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(17)"
                    data-nav-id="reviewsnav_17"
                    data-id={17}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Нина Поляничева — GoFortune"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(18)"
                    data-nav-id="reviewsnav_18"
                    data-id={18}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Кристина Лысенко — Автозайм"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(19)"
                    data-nav-id="reviewsnav_19"
                    data-id={19}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Наталья Кондратенко — Company"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(0)"
                    data-id={0}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Никитин Сергей Петрович — ФК Импульс"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(1)"
                    data-id={1}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Хитрина Наталья Александровна — Компания “Аптека Вита”"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(2)"
                    data-id={2}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Заболотная Светлана Михайловна — АО  Талап"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(3)"
                    data-id={3}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Дилдора Турсунова — Perfect Counsulting Group"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(4)"
                    data-id={4}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Алексей Молчанов — Envybox"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(5)"
                    data-id={5}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Валерий Горячев — Evolution management"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(6)"
                    data-id={6}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Илья Кусакин — Люди Дела"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(7)"
                    data-id={7}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Светлана Керимова — Woman Insight"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(8)"
                    data-id={8}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Валентин Нам — Окна Юг"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(9)"
                    data-id={9}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Наталья Мельникова — ЛОЭСК"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(10)"
                    data-id={10}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Алексей Коган — Открытая мобильная платформа"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(11)"
                    data-id={11}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Куринский Андрей Викторович — LogicPower"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(12)"
                    data-id={12}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Юлия Шабанина — Дядюшка Плинтус"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(13)"
                    data-id={13}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Константин Мосин — Инсайт"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(14)"
                    data-id={14}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Альфред Бадгиев — ООО ЛТ Глобал Форвардинг"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(15)"
                    data-id={15}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Руслан Шмаков — РИО Транс"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(16)"
                    data-id={16}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Ольга Кузьменкова — Elite Class"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(17)"
                    data-id={17}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Нина Поляничева — GoFortune"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(18)"
                    data-id={18}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Кристина Лысенко — Автозайм"
                      />
                    </picture>
                  </div>
                  <div
                    className="customerreview_nav_item"
                    onclick="onClickReviewNav(19)"
                    data-id={19}
                  >
                    <picture>
                      <source
                        type="image/webp"
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                      />
                      <img
                        src="https://www.unicraft.org/static/reviews/eliteclass/photo.min.webp"
                        alt="Наталья Кондратенко — Company"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div id="reviewsContainer">
              <div
                itemProp="review"
                itemScope
                itemType="http://schema.org/Review"
                data-reviewsitem-id="reviewsitem_0"
              >
                <div
                  itemProp="itemReviewed"
                  itemScope
                  itemType="https://schema.org/Organization"
                  style={{
                    overflow: "hidden",
                    position: "absolute",
                    height: 1,
                    width: 1,
                  }}
                >
                  <meta itemProp="name" content="Unicraft" />
                  <link itemProp="url" href="https://unicraft.org" />
                  <div
                    itemProp="logo"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <img
                      itemProp="contentUrl"
                      src="/style/img/logo/logo_color.svg"
                      alt="Logo"
                    />
                  </div>
                </div>
                <div className="customerreview_view">
                  <div
                    className="customerreview_view_user"
                    itemProp="author"
                    itemScope
                    itemType="http://schema.org/Person"
                  >
                    <div
                      itemProp="name"
                      className="customerreview_view_user_name"
                    >
                      Никитин Сергей Петрович
                    </div>
                    <div className="customerreview_view_user_desc">
                      Президент и главный тренер футбольного клуба «Импульс»
                    </div>
                    <div className="customerreview_view_user_company">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="/static/reviews/fkimpuls/logo.min.webp 1x, /static/reviews/fkimpuls/logo@2x.min.webp 2x"
                        />
                        <source
                          type="image/png"
                          srcSet="/static/reviews/fkimpuls/logo.min.png 1x, /static/reviews/fkimpuls/logo@2x.min.png 2x"
                        />
                        <img
                          src="/static/reviews/fkimpuls/logo.min.png"
                          alt="ФК Импульс"
                        />
                      </picture>
                    </div>
                    <div className="customerreview_view_user_details">
                      <div className="customerreview_view_user_details_item">
                        <p>Cпортивный клуб</p>
                      </div>
                      <div className="customerreview_view_user_details_item">
                        <p>19 клубов, более 100 тренеров</p>
                      </div>
                      <div className="customerreview_view_user_details_item">
                        <p>
                          Обучают тренеров по футболу технологии проведения
                          тренировок, а также своих франчайзи тому, как открыть
                          футбольный клуб
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="customerreview_view_result">
                    <blockquote
                      itemProp="reviewBody"
                      className="customerreview_view_quote"
                    >
                      Платформа Unicraft помогла нам создать системное обучение
                      и стать футбольной школой №1 в каждом городе, где мы
                      представлены. Теперь наши сотрудники непрерывно
                      развиваются и помогают детям формировать стабильные
                      футбольные навыки.
                    </blockquote>
                    <div className="customerreview_view_result_details">
                      <div className="customerreview_view_result_details_line" />
                      <div className="customerreview_view_result_details_before">
                        <h3 className="customerreview_view_result_details_before_title">
                          До
                        </h3>
                        <ul>
                          <li>
                            Проведение очных обучающих занятий занимает много
                            времени
                          </li>
                          <li>
                            Приходится ездить в разные города для обучения
                            удаленных сотрудников, некоторые знания теряются
                          </li>
                          <li>
                            Не отслеживается процесс обучения, нет данных по
                            каждому сотруднику
                          </li>
                        </ul>
                      </div>
                      <div className="customerreview_view_result_details_after">
                        <h3 className="customerreview_view_result_details_after_title">
                          После
                        </h3>
                        <ul>
                          <li>
                            Обучение автоматизировано, сотрудники самостоятельно
                            проходят курсы
                          </li>
                          <li>
                            Сотрудники из разных регионов получают одинаковые
                            знания, работа стандартизирована
                          </li>
                          <li>
                            Можно получать автоматическую статистику по обучению
                            и контролировать результаты
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurTeam;
