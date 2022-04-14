import React from "react";
import "./contact.css";

function Contacts() {
  return (
    <div>
      {" "}
      <div className="container_section container_section--main">
        <div className="row">
          <h1 className="container_section_title text_center">
            Свяжитесь с нами
          </h1>
          <p className="hugetext text_center ">
            Поможем вам выбрать подходящий тариф, ответим на вопросы о продукте,
            поможем решить возникшие проблемы.
          </p>
        </div>
      </div>
      <section class="container_section">
        <div
          class="row address"
          itemscope=""
          itemtype="http://schema.org/Organization"
        >
          <div class="address_info">
            <h2>Новым клиентам</h2>
            <p class="hugetext" itemprop="telephone">
              <a href="tel:+7 (495) 532-69-02">+7 (495) 532-69-02</a>
            </p>
            <p itemprop="email">
              <a href="mailto:sales@unicraft.org">sales@unicraft.org</a>
            </p>
            <h2>Текущим клиентам</h2>
            <p class="hugetext">
              <a href="tel:+8 (800) 350-24-43">8 (800) 350-24-43</a>
            </p>
            <p>
              <a href="mailto:support@unicraft.org">support@unicraft.org</a>
            </p>
          </div>
          <div class="address_payinfo">
            <h2>Реквизиты</h2>
            <p>
              <span itemprop="name">
                Общество с ограниченной ответственностью "ЮНИКРАФТ”
              </span>
              <br />
              <br />
              <span itemprop="address">
                Юр. адрес: 123458, Москва г, Твардовского ул, дом 8, строение 1,
                помещение I ЭТ 3 КОМ 7
              </span>
              <br />
              <br />
              ИНН: 7722369110
              <br />
              КПП: 773401001
              <br />
              ОГРН: 1167746628345
              <br />
              <br />
              Расчетный счет: 40702810202500064712
              <br />
              Банк: ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"
              <br />
              БИК: 044525999
              <br />
              Kорр. счет: 30101810845250000999
              <br />
              <br />
              Генеральный директор: Маслов Артем Андреевич
            </p>
          </div>
        </div>
      </section>

      <section class="container_section">
      <div class="row">
        <p class="tac hugetext">Есть вопросы? Пишите!</p>
        <form class="writetous" name="writetous" id="writetous" onsubmit="writetousSubmit();return false;">
          <div class="writetous_error" id="writetous_error"style={{ display: "none" }}>
            <p>Что-то пошло не так. Попробуйте еще раз</p>
          </div>
          <div class="writetous_process" id="writetous_process"style={{ display: "none" }}>
            <p>Подготовка к отправке...</p>
          </div>
          {/* <div class="writetous_success">
            <p class="largetext">Сообщение отправлено.
              <br />Мы свяжемся с вами в ближайшее время.
            </p>
            <p>
              <a class="dottedlink" onclick="sendMore(this)">Хотите написать еще?</a>
            </p>
          </div> */}
          <div class="writetous_message" data-message="Сообщение отправляется">
            <div class="writetous_message_info">
              <div>
                <input type="name" class="text" id="writetous_message-name" placeholder="Имя и фамилия" value="" />
              </div>
              <div>
                <input type="phone" class="text" id="writetous_message-phone" placeholder="Телефон" value="" formnovalidate="" />
              </div>
              <div>
                <input type="text" class="text" id="writetous_message-companyname" placeholder="Название организации" value="" />
              </div>
              <div>
                <input type="email" class="text" id="writetous_message-email" placeholder="Ваш e-mail" value="" required="" />
              </div>
            </div>
            <div class="writetous_message_text">
              <div>
                <textarea class="text" id="writetous_message-message" placeholder="Ваше сообщение" rows="10" required="" minlength="10"></textarea>
                <button type="submit" class="button button_accent">Отправить</button>
                <span class="smalltext clr_gray">Сообщение должно быть не менее 10 символов.</span>
              </div>
            </div>
          </div>
        </form>
      </div>
      </section >
    </div>
  );
}

export default Contacts;
