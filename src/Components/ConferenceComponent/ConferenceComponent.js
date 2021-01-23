import React from "react";
import "./ConferenceComponent.scss";

function ConferenceComponent({ title1, title2, title3, Icon1, Icon2, Icon3 }) {
  return (
    <div className="conference__wrapper">
      <div className="conference__row">
        <Icon1 className="conference__icon" />
        <span>{title1}</span>
      </div>
      <div className="conference__row">
        <Icon2 className="conference__icon" />
        <span>{title2}</span>
      </div>
      {title3 || Icon3 ? (
        <div className="conference__row">
          <Icon3 className="conference__icon" />
          <span>{title3}</span>
        </div>
      ) : null}
    </div>
  );
}

export default ConferenceComponent;
