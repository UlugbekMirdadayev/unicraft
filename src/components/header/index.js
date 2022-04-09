import React from "react";
import { Logo } from "./../export/svg";
import "./header.scss";

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header__logo">
          <Logo /> <span> Unicraft — платформа для онлайн обучения </span>
        </div>
      </header>
    </div>
  );
}

export default Header;
