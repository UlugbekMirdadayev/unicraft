import React from "react";
import "./home.scss";

function Home() {
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
          {/* <source src="/static/video/vh1/720.webm" type="video/webm" media="(max-width: 1000px)"> */}
          {/* <source src="/static/video/vh1/720.mp4" type="video/mp4" media="(max-width: 1000px)"> */}
          {/* <source src="/static/video/vh1/1080.webm" type="video/webm"> */}
          {/* <source src="/static/video/vh1/1080.mp4" type="video/mp4"> */}
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
          <div className="leaders-section-content-item">
            <div className="leaders-section-content-item-img">
              <img src="/static/img/leaders/1.png" alt="Лидер 1" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
