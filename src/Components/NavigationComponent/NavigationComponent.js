import React from "react";
import { Link } from "react-router-dom";
import "./NavigationComponent.scss";

function NavigationComponent({ link }) {
  return (
    <div className="navigationComponent">
      <h1>
        <Link to="/" className="navigationComponent__home">
          Home
        </Link>{" "}
        /{" "}
        <Link to={`/${link}`} className="navigationComponent__link">
          {" "}
          {link}
        </Link>
      </h1>
    </div>
  );
}

export default NavigationComponent;
