import React from "react";
import "./partner.css";
function Partners() {
  // const info = [
  //   {
  //     infoH3: "Рекламные материалы",
  //     infoP: "Полный набор для продвижения продукта в интернете и оффлайн",
  //   },
  //   {
  //     infoH3: "Совместное проведение первых презентаций",
  //     infoP:
  //       "Покажем, расскажем и научим как провести презентацию лучшим образо",
  //   },
  //   {
  //     infoH3: "Демо-доступы",
  //     infoP:
  //       "Для демонтрации возможностей платформы предоставляются демо-версии площадок  ",
  //   },
  //   {
  //     infoH3: "Оперативная поддержка по любым вопросам",
  //     infoP:
  //       "Вы всегда можете рассчитывать на квалифицированную помощь наших специалистов. ",
  //   },
  // ];

  return (
    <div className="cont_big">
      <div className="container_section container_section--main content_is">
        <div className="row tac">
          <h1 className="container_section_title">
            Зарабатывайте <br />
            до 30% от платежей клиентов
          </h1>
          <p className="hugetext">
            С нами работают компании из самых разных отраслей, основными
            направлениями деятельности которых является:
          </p>
        </div>
        <div className="row">
          <div className="container_widgets" id="partners_types">
            <div className="container_widgets_item">
              <div className="container_widgets_item_icon">
                <img src="https://www.unicraft.org/page/partners/icons/integrators.svg" />
              </div>
              <p className="largetext">ИТ-интеграторы</p>
            </div>
            <div className="container_widgets_item">
              <div className="container_widgets_item_icon">
                <img src="https://www.unicraft.org/page/partners/icons/consult.svg" />
              </div>
              <p className="largetext">
                Консалтинговые компании, агенты и внедренцы обучения
              </p>
            </div>
            <div className="container_widgets_item">
              <div className="container_widgets_item_icon">
                <img src="https://www.unicraft.org/page/partners/icons/integrators.svg" />
              </div>
              <p className="largetext">
                Разработчики и поставщики готовых курсов
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container_section">
          <div className="row tac">
            <h2>Обеспечим всем необходимым</h2>
            <p className="largetext">
              Для достижения наилучших результатов мы представим вам материалы,
              научим и покажем как проводить презентации и подскажем при наличии
              вопросов
            </p>
          </div>
          <div className="row">
            {/* {info.map((item, index) => {
              return (
                <div key={index} className="promo_block">
                  <div className="promo_block_description">
                    <h3>{item.infoH3}</h3>
                    <p className="largetext">
                    {item.infoP}
                    </p>
                    <ul className="promo_block_list promo_block_list--checkmark">
                      <li>Иллюстрации</li>
                      <li>Буклеты</li>
                      <li>Фирменные бланки</li>
                    </ul>
                  </div>
                  <div className="promo_block_preview">
                    <img  src="./images/materials.png" />
                  </div>
                </div>
              );
            })} */}

            <div className="promo_block">
              <div className="promo_block_description">
                <h3>Рекламные материалы</h3>
                <p className="largetext">
                  Полный набор для продвижения продукта в интернете и оффлайн
                </p>
                <ul className="promo_block_list promo_block_list--checkmark">
                  <li>Иллюстрации</li>
                  <li>Буклеты</li>
                  <li>Фирменные бланки</li>
                </ul>
              </div>
              <div className="promo_block_preview">
                <img src="https://www.unicraft.org/page/partners/images/materials.png" />
              </div>
            </div>

            <div className="promo_block">
              <div className="promo_block_preview">
                <img src="https://www.unicraft.org/page/partners/images/presentation.png" />
              </div>
              <div className="promo_block_description">
                <h3>Совместное проведение первых презентаций</h3>
                <p className="largetext">
                  Покажем, расскажем и научим как провести презентацию лучшим
                  образом
                </p>
              </div>
            </div>

            <div className="promo_block">
              <div className="promo_block_description">
                <h3>Демо-доступы</h3>
                <p className="largetext">
                  Для демонтрации возможностей платформы предоставляются
                  демо-версии площадок
                </p>
              </div>
              <div className="promo_block_preview">
                <img src="https://www.unicraft.org/page/partners/images/demo.png" />
              </div>
            </div>

            <div className="promo_block">
              <div className="promo_block_preview">
                <img src="https://www.unicraft.org/page/partners/images/support.png" />
              </div>
              <div className="promo_block_description">
                <h3>Оперативная поддержка по любым вопросам</h3>
                <p className="largetext">
                  Вы всегда можете рассчитывать на квалифицированную помощь
                  наших специалистов.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="container_section container_section--main gggggg" >
      <div class="row tac">
        <h2>Зарабатывайте вместе с Unicraft</h2>
      </div>
      <div class="cta_block">
        <button type="button" class="button button_rounded button_success button_gradienteffect" requestform_reg_express="" requestform-auditory="Партнер" requestform-title="Заявка на сотрудничество" requestform-action="Отправить">Стать партнёром</button>
      </div>

      <div class="row tac">
        <p class="largetext">В среднем с одной продажи партнёр получает 30 000 ₽</p>
        <p class="largetext">С нами уже сотрудничают более 100 компаний, среди которых есть такие крупные как:</p>

        <div class="partners partners--spaced">
          <div class="partners_item">
            <div class="partners_logo">
              <img loading="lazy" src="https://www.unicraft.org/static/logos/partners/softline.png" alt="Софтлайн"/>
            </div>
          </div>
          <div class="partners_item">
            <div class="partners_logo">
              <img loading="lazy" src="https://www.unicraft.org/static/logos/partners/croc.png" alt="Крок"/>
            </div>
          </div>
          <div class="partners_item">
            <div class="partners_logo">
              <img loading="lazy" src="https://www.unicraft.org/static/logos/partners/amocrm.png" alt="AMO"/>
            </div>
          </div>
          <div class="partners_item">
            <div class="partners_logo">
              <img loading="lazy" src="https://www.unicraft.org/static/logos/partners/tinkoff.png" alt="Тинькофф"/>
            </div>
          </div>
        </div>
      </div>


    </div>
    </div>
  );
}

export default Partners;
