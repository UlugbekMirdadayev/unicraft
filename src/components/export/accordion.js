import React from "react";
import "./accordion.scss";
import { AccordIcon } from "./svg";
function Accordion({ props = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) {
  return (
    <div className="accordion">
      {props.map((item, index) => {
        return (
          <div className="accordion__item" key={`${index}toggler_accord`}>
            <input
              type="checkbox"
              className="accord__toggler"
              id={`${index}toggler_accord`}
            />
            <label
              htmlFor={`${index}toggler_accord`}
              className="accordion__item__header"
            >
              <div className="accordion__item__header__title">
                В чем преимущества платформы Unicraft?
              </div>
              <div className="accordion__item__header__icon">
                <AccordIcon />
              </div>
            </label>
            <div className="accordion__item__content">
              <div className="accordion__item__content__text">
                Первое и самое важное - СДО полностью адаптируется под ваши
                потребности. Вы определяете задачи, которые хотите решить с
                помощью удаленного обучения, а платформа и наша команда
                методологов помогают вам достичь этой цели, решая все
                возникающие вопросы. Платформа имеет приятный дизайн. Интерфейс
                легкий и удобный в освоении. Не требуется никакого
                дополнительного программного обеспечения для создания онлайн
                курса. Встроенный редактор курсов и тестов позволяет совершать
                все необходимые действия прямо на платформе. Наша платформа уже
                широко используется для проведения онлайн обучения и занимает
                уверенное первое место в рейтинге лучших платформ онлайн курсов
                портала Startpack. Бесплатная демо-версия позволит вам
                ознакомиться со всеми возможностями платформы. Подключайтесь!
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
