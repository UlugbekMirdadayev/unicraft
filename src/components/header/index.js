import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "./../export/svg";
import "./header.scss";
import { useScroll } from "../../hook/scroll";
const styles = {
  active: {
    transition: "ease 0.3s opacity, ease 0.2s transform",
    opacity: 1,
  },
  hidden: {
    transition: "ease 0.3s opacity, ease 0.2s transform",
    transform: "translateY(-100%)",
    opacity: 0,
  },
};
const linkData = [
  {
    name: "Главная",
    link: "/",
    dropdown: false,
  },
  {
    name: "Тарифы",
    link: "/rate",
    dropdown: [
      {
        name: "Стоимость",
        link: "/rate#price",
      },
      {
        name: "Возможности",
        link: "/rate#features",
      },
      {
        name: "Частые вопросы",
        link: "/rate#faq",
      },
    ],
  },
  {
    name: "Каталог курсов",
    link: "/catalog",
    dropdown: false,
  },
  {
    name: "Компания",
    link: "/about",
    dropdown: [
      {
        name: "О нас",
        link: "/about#about",
      },
      {
        name: "Отзывы",
        link: "/reviews",
      },
      {
        name: "Партнерам",
        link: "/partners",
      },
      {
        name: "Вакансии",
        link: "/vacancy",
      },
      {
        name: "Контакты",
        link: "/contacts",
      },
    ],
  },
  {
    name: "Поддержка",
    link: "/help",
  },
  {
    name: "Блог",
    link: "/blog",
  },
];

function Header() {
  const { hash, pathname } = useLocation();
  const [lang, setLang] = React.useState("ru");
  let { scrollDirection } = useScroll();
  const [menu, setMenu] = React.useState(false);

  if (window.innerWidth < 1025) {
    document.body.style.overflow = !menu ? "auto" : "hidden";
  }

  return (
    <div
      className={`header-container ${
        window.innerWidth < 1025 ? (menu ? "active" : "") : ""
      }`}
      style={{ background: "#000" }}
    >
      <div
        className="w100"
        style={
          !menu
            ? scrollDirection === "down" || scrollDirection === undefined
              ? styles.active
              : styles.hidden
            : {}
        }
      >
        <header className="header">
          <NavLink
            to={"/"}
            className="header__logo"
            onClick={() => setMenu(false)}
          >
            <Logo /> <span> Unicraft — платформа для онлайн обучения </span>
          </NavLink>
          <div className="header__menu" onClick={() => setMenu(!menu)}>
            <div className="header__menu-item"></div>
            <div className="header__menu-item"></div>
            <div className="header__menu-item"></div>
          </div>

          <ul className={menu ? "active__menu" : ""}>
            {linkData.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => setMenu(false)}
                    className={"nav-link-header"}
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                  {item.dropdown && (
                    <ol className="header__dropdown">
                      {item.dropdown.map((item, index) => {
                        return (
                          <NavLink
                            onClick={() => setMenu(false)}
                            style={
                              pathname + hash === item?.link
                                ? { color: "red" }
                                : {}
                            }
                            key={index}
                            to={item.link}
                          >
                            {item.name}
                          </NavLink>
                        );
                      })}
                    </ol>
                  )}
                </li>
              );
            })}
            <li>
              <div className="language">
                <span>{lang}</span>
                <div className="select-lang">
                  <button
                    onClick={() => {
                      setLang("ru");
                      setMenu(false);
                    }}
                  >
                    RU
                  </button>
                  <button
                    onClick={() => {
                      setLang("en");
                      setMenu(false);
                    }}
                  >
                    EN
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
