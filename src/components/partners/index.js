import React from "react";
import "./partner.css";
function Partners() {
  return (
    <div className="cont_big">
      <div
        class="container_section container_section--main content_is"
       
      >
        <div class="row tac">
          <h1 class="container_section_title">
            Зарабатывайте <br />
            до 30% от платежей клиентов
          </h1>
          <p class="hugetext">
            С нами работают компании из самых разных отраслей, основными
            направлениями деятельности которых является:
          </p>
        </div>
        <div class="row">
          <div class="container_widgets" id="partners_types">
            <div class="container_widgets_item">
              <div class="container_widgets_item_icon">
                <img loading="lazy" src="https://www.unicraft.org/page/partners/icons/integrators.svg" alt="..." />
              </div>
              <p class="largetext">ИТ-интеграторы</p>
            </div>
            <div class="container_widgets_item">
              <div class="container_widgets_item_icon">
                <img loading="lazy" src="https://www.unicraft.org/page/partners/icons/consult.svg" alt="..." />
              </div>
              <p class="largetext">
                Консалтинговые компании, агенты и внедренцы обучения
              </p>
            </div>
            <div class="container_widgets_item">
              <div class="container_widgets_item_icon">
              <img loading="lazy" src="https://www.unicraft.org/page/partners/icons/integrators.svg" alt="..." />
              </div>
              <p class="largetext">Разработчики и поставщики готовых курсов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
