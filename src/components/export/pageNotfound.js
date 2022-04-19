import React from "react";
import { NavLink } from "react-router-dom";
import "./notfound.css";

function PageNotfound() {
  return (
    <div style={{ padding: "3vw 0" }}>
      <h1 className="error__heading">404 Error Page</h1>
      <p className="zoom-area"></p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <NavLink to={"/"} className="more-link">
          Unicraft — платформа для онлайн обучения
        </NavLink>
      </div>
    </div>
  );
}

export default PageNotfound;
