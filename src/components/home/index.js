import React from "react";
import VanillaTilt from "vanilla-tilt";
import "./home.scss";
import Sber from "../../assets/img/sber.webp";
import Rostelecom from "../../assets/img/rostelecom.webp";
import Mts from "../../assets/img/mts.webp";
import Mailru from "../../assets/img/mailru.webp";
import Ingos from "../../assets/img/ingos.webp";
import SportMaster from "../../assets/img/sportmaster.webp";
import Mondi from "../../assets/img/mondi.webp";
import AptekaVita from "../../assets/img/aptekavita.webp";
import Askona from "../../assets/img/askona.webp";
import Ochakovo from "../../assets/img/ochakovo.webp";
import Greenway from "../../assets/img/greenway.webp";
import Msu from "../../assets/img/msu.webp";
import TiltImg from "../../assets/img/tilt.webp";
import TiltImgAfter from "../../assets/img/tiltafter.webp";
import TiltImgTwo from "../../assets/img/tilttwo.webp";
import TiltImgAfterTwo from "../../assets/img/tiltaftertwo.webp";
import TiltImghree from "../../assets/img/tiltthree.webp";
import TiltImgAfterhree from "../../assets/img/tiltafterthree.webp";
import Problem from "../../assets/img/problem.png";
import ProblemTwo from "../../assets/img/problem2.png";
import ProblemThree from "../../assets/img/problem3.png";
import ProblemFour from "../../assets/img/problem4.png";
import ProblemFive from "../../assets/img/problem5.png";
import ProblemSix from "../../assets/img/problem6.png";

const Liders = [
  {
    img: Sber,
    name: "Сбербанк",
  },
  {
    img: Rostelecom,
    name: "Ростелеком",
  },
  {
    img: Mts,
    name: "МТС",
  },
  {
    img: Mailru,
    name: "Mail.ru",
  },
  {
    img: Ingos,
    name: "Ингосстрах",
  },
  {
    img: SportMaster,
    name: "Спортмастер",
  },
  {
    img: Mondi,
    name: "Монди",
  },
  {
    img: AptekaVita,
    name: "Аптека Вита",
  },
  {
    img: Askona,
    name: "Askona",
  },
  {
    img: Ochakovo,
    name: "Очаково",
  },
  {
    img: Greenway,
    name: "Greenway",
  },
  {
    img: Msu,
    name: "МСУ",
  },
];

const AnyProblems = [
  {
    img: Problem,
    title: "Онлайн-обучение для клиентов",
    text: "Зарабатывайте на предоставлении доступа к курсам и программам",
  },
  {
    img: ProblemTwo,
    title: "Потоковая адаптация персонала",
    text: "Быстро вводите в должность новых сотрудников",
  },
  {
    title: "Обучение ассортименту и продажам",
    text: "Оперативно сообщайте о новинках и увеличивайте доход",
  },
  {
    img: ProblemThree,
    title: "Систематизация и масштабирование",
    text: "Расширяйте бизнес и занимайте новые территории",
  },
  {
    img: ProblemFour,
    title: "Регулярная аттестация сотрудников",
    text: "Проверяйте знания для соблюдения единых стандартов",
  },
  {
    img: ProblemFive,
    title: "Полная автоматизация HR процессов",
    text: "Решайте все кадровые задачи в одной системе",
  },
];

function Home() {
  const options = {
    scale: 1,
    speed: 1000,
    max: 30,
  };

  return (
    <main className="home">
      <div className="video-bg-intro">
        <div className="video-overlay" />
        <video
          lazy="lazy"
          preload="none"
          autoPlay
          loop
          muted
          pip="false"
          playsInline
          poster="https://www.unicraft.org/static/video/vh1/poster.webp"
          id="headerVideo"
        >
          <source
            data-src="https://player.vimeo.com/external/660278794.hd.mp4?s=e4deeeb47bb419b5443c34fa7f0c89b7a31642c9&profile_id=174"
            type="video/mp4"
            src="https://player.vimeo.com/external/660278794.hd.mp4?s=e4deeeb47bb419b5443c34fa7f0c89b7a31642c9&profile_id=174"
          />
        </video>
        <div className="home-content">
          <div className="home-content-text">
            <h1>Платформа для онлайн обучения</h1>
            <p>
              Запусти обучение сотрудников сейчас, следуя простым инструкциям
            </p>
            <button>Попробовать бесплатно</button>
          </div>
        </div>
      </div>
      <div className="leaders-section">
        <div className="leaders-section-title">
          <h2>Unicraft доверяют лидеры</h2>
        </div>
        <div className="leaders-section-content">
          {Liders.map((__res) => {
            return (
              <div
                key={__res?.name + 1}
                className="leaders-section-content-item"
              >
                <div className="leaders-section-content-item-img">
                  <img src={__res?.img} alt={__res?.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container_section_intuitive">
        <div className="container_section_intuitive_title">
          <h2>Интуитивное управление</h2>
        </div>
        <div className="container_section_intuitive_content">
          <Tilt
            img={TiltImg}
            imgAfter={TiltImgAfter}
            index={1}
            options={options}
            title="Загрузи материалы"
            text="Работай с привычными форматами прямо на платформе"
          />
          <Tilt
            img={TiltImgTwo}
            imgAfter={TiltImgAfterTwo}
            index={2}
            options={options}
            title="Назначь обучение"
            text="Импортируй пользователей из других систем автоматически"
          />
          <Tilt
            img={TiltImghree}
            imgAfter={TiltImgAfterhree}
            index={3}
            options={options}
            title="Получи результат"
            text="Преврати новичка в компетентного специалиста за несколько дней"
          />
        </div>
      </div>
      <div className="container_section solve-container">
        <div className="container_section_title">
          <h2>Решим любую вашу задачу</h2>
        </div>
        <div className="container_section_content">
          {AnyProblems.map((__res, i) => {
            return (
              <div className="card__" key={i + __res?.title}>
                <img src={__res?.img} alt="" />
                <div className="__card_title">{__res?.title}</div>
                <div className="__card_text">{__res?.text}</div>
                <button>Подробнее</button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function Tilt({ img, imgAfter, index, options, title, text }) {
  const tilt = React.useRef(null);

  React.useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <>
      <div className="container_section_intuitive_content_card">
        <div className="number">{index}</div>
        <div
          data-tilt
          data-tilt-axis="x"
          ref={tilt}
          className="container_section_intuitive_content_card_img"
        >
          <img src={img} alt="Сбербанк" />
          <img src={imgAfter} className="tilt-img-after" alt="" />
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Home;
