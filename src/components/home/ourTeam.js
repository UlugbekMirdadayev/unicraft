import React, { useState } from "react";
import "./ourTeam.css";

const Members = [
  {
    id: 1,
    name: "Никитин Сергей Петрович",
    role: "Президент и главный тренер футбольного клуба «Импульс»",
    image: "https://www.unicraft.org/static/reviews/fkimpuls/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/fkimpuls/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 2,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 3,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 4,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 5,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 6,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 7,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 8,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 9,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
  {
    id: 10,
    name: "Хитрина Наталья Александровна",
    role: "Менеджер по персоналу «Аптека Вита»",
    image: "https://www.unicraft.org/static/reviews/aptekavita/photo.min.webp",
    logo: "https://www.unicraft.org/static/reviews/aptekavita/logo.min.webp",
    desc: "Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.",
    detailText: "Cпортивный клуб",
    detailText2: "19 клубов, более 100 тренеров",
    detailText3:
      "Обучают тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб",
    imgRight: undefined,
    listRight: {
      before: [
        "Проведение очных обучающих занятий занимает много времени",
        "Приходится ездить в разные города для обучения удаленных сотрудников, некоторые знания теряются",
        "Не отслеживается процесс обучения, нет данных по каждому сотруднику",
      ],
      after: [
        "Обучение автоматизировано, сотрудники самостоятельно проходят курсы",
        "Сотрудники из разных регионов получают одинаковые знания, работа стандартизирована",
        "Можно получать автоматическую статистику по обучению и контролировать результаты",
      ],
    },
  },
];

function OurTeam() {
  const [team, setTeam] = useState(1);
  console.log(team);
  return (
    <div>
      <section className="container_section clients" id="customerreview">
        <div className="row tac">
          <h2>Отзывы наших клиентов</h2>
        </div>
        <div className={`row`}>
          <div className="customerreview">
            <div className="customerreview_nav">
              <button
                className="customerreview_nav_arrow customerreview_nav_arrow--prev"
                aria-label="Предыдущий отзыв"
                onClick={() => setTeam(team > 1 ? team - 1 : Members?.length)}
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
                aria-label="Предыдущий отзыв"
                onClick={() => setTeam(Members.length !== team ? team + 1 : 1)}
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
                >
                  {Members.map((member) => {
                    return (
                      <div
                        className={`customerreview_nav_item ${
                          team === member.id ? "active" : ""
                        }`}
                        onClick={() => setTeam(member?.id)}
                      >
                        <picture>
                          <source type="image/webp" src={member?.image} />
                          <img src={member?.image} alt={member?.name} />
                        </picture>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div style={{ position: "relative", overflowY: "clip" }}>
              {Members.map((member) => {
                return (
                  <div
                    key={member?.id}
                    id="reviewsContainer"
                    className={`${team === member?.id ? "active" : ""}`}
                  >
                    <div
                      itemProp="review"
                      itemScope
                      itemType="http://schema.org/Review"
                      data-reviewsitem-id="reviewsitem_0"
                    >
                      <div className="customerreview_view">
                        <div>
                          <div
                            itemProp="name"
                            className="customerreview_view_user_name"
                          >
                            {member?.name}
                          </div>
                          <div className="customerreview_view_user_desc">
                            {member?.role}
                          </div>
                          <div className="customerreview_view_user_company">
                            <picture>
                              <source
                                type="image/webp"
                                srcSet={`${member?.logo} 1x, ${member?.logo} 2x`}
                              />
                              <source
                                type="image/png"
                                srcSet={`${member?.logo} 1x, ${member?.logo} 2x`}
                              />
                              <img src={member?.logo} alt="..." />
                            </picture>
                          </div>
                          <div className="customerreview_view_user_details">
                            <div className="customerreview_view_user_details_item">
                              <p>{member?.detailText}</p>
                            </div>
                            <div className="customerreview_view_user_details_item">
                              <p>{member?.detailText2}</p>
                            </div>
                            <div className="customerreview_view_user_details_item">
                              <p>{member?.detailText3}</p>
                            </div>
                          </div>
                        </div>
                        <div className="customerreview_view_result">
                          <blockquote
                            itemProp="reviewBody"
                            className="customerreview_view_quote"
                          >
                            {member?.desc}
                          </blockquote>
                          <div className="customerreview_view_result_details">
                            <div className="customerreview_view_result_details_line" />
                            <div className="customerreview_view_result_details_before">
                              <h3 className="customerreview_view_result_details_before_title">
                                До
                              </h3>
                              <ul>
                                <li>
                                  Проведение очных обучающих занятий занимает
                                  много времени
                                </li>
                                <li>
                                  Приходится ездить в разные города для обучения
                                  удаленных сотрудников, некоторые знания
                                  теряются
                                </li>
                                <li>
                                  Не отслеживается процесс обучения, нет данных
                                  по каждому сотруднику
                                </li>
                              </ul>
                            </div>
                            <div className="customerreview_view_result_details_after">
                              <h3 className="customerreview_view_result_details_after_title">
                                После
                              </h3>
                              <ul>
                                <li>
                                  Обучение автоматизировано, сотрудники
                                  самостоятельно проходят курсы
                                </li>
                                <li>
                                  Сотрудники из разных регионов получают
                                  одинаковые знания, работа стандартизирована
                                </li>
                                <li>
                                  Можно получать автоматическую статистику по
                                  обучению и контролировать результаты
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurTeam;
