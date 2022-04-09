import React from "react";
import { PresentBox } from "../export/svg";
function Rate() {
  return (
    <div className="rate">
      <h1>Тарифы</h1>
      <p>
        Сравните пакеты предложений и выберите подходящие возможности и
        стоимость
      </p>
      <div className="tariff_blocks_period">
        <p>Квартал</p>
        <div className="tariff_blocks_period_switch">
          <div className="switch"></div>
        </div>
        <div className="tariff_blocks_period_year">
          <p>Год</p>
          <div className="tariff_img">
            <PresentBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
