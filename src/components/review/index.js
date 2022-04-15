import React from "react";

import './review.css'
function Review() {
  return (
    
    <div>
      <div className="container_section__main">
        <p className="nashix">Отзывы наших клиентов</p>
        <p className="hugetext">Они уже оценили возможности и эффективность использования платформы Unicraft </p>
      </div>
      <section class="container_section row">
        <div class="customerreview_view">
          <div class="customerreview_view_user">
            <div itemprop="name" class="customerreview_view_user_name">Никитин Сергей Петрович</div>
            <div class="customerreview_view_user_desc">Президент и главный тренер футбольного клуба «Импульс»</div>
            <div className="customerreview_view_user_company">
              <img src="https://www.unicraft.org/static/reviews/fkimpuls/logo.min.webp" alt="ФК Импульс" />
            </div>
            <div class="customerreview_view_user_details_item">
            <p><b>Сфера деятельности</b></p>
            <p class="largetext">Cпортивный клуб</p>
          </div>
          <div class="customerreview_view_user_details_item">
            <p><b>Сотрудников в компании</b></p>
            <p class="largetext">19 клубов, более 100 тренеров</p>
            </div>
            <div class="customerreview_view_user_details_item">
            <p><b>Кого и чему обучают</b></p>
            <p>тренеров по футболу технологии проведения тренировок, а также своих франчайзи тому, как открыть футбольный клуб</p>
            </div>
            <p class="smalltext" style={{margin: "2rem 0 0"}}><a class="button button_bordered button_accent button_rounded" href="https://www.unicraft.org/blog/6749/unicraft-gotovit-futbolistov/">Читать подробнее</a></p>
          </div>
          
          <div class="customerreview_view_result">
            <blockquote itemprop="reviewBody" class="customerreview_view_quote">Платформа Unicraft помогла нам создать системное обучение и стать футбольной школой №1 в каждом городе, где мы представлены. Теперь наши сотрудники непрерывно развиваются и помогают детям формировать стабильные футбольные навыки.</blockquote>
            <div class="customerreview_view_result_details">
          <div class="customerreview_view_result_details_line"></div>
          <div class="customerreview_view_result_details_before">
            <h3 class="customerreview_view_result_details_before_title">До</h3>
            <ul>
              <li>Нет средства оперативной коммуникации с персоналом</li><li>Пандемия на несколько месяцев приостановила обучение сотрудников</li><li>Материалы для обучения не оцифрованы, большая часть - в печатном виде</li>
            </ul>
          </div>
          <div class="customerreview_view_result_details_after">
            <h3 class="customerreview_view_result_details_after_title">После</h3>
            <ul>
              <li>Установлен постоянный информационный контакт с сотрудниками</li><li>Знания сотрудников по ассортименту постоянно поддерживаются на должном уровне</li><li>Сокращен срок ввода в должность и выход сотрудников на плановые показатели</li>
            </ul>
          </div>
        </div>
          </div>
          
        </div>
        </section>
    </div>

  );
}
export default Review;
