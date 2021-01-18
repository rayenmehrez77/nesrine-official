import React from "react";
import "./NavigationComponent.scss";

function NavigationComponent({ link }) {
  return (
    <div className="navigationComponent">
      <h1>Home / {link}</h1>
    </div>
  );
}

export default NavigationComponent;
