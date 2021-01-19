import React from "react";
import "./CustomHeadline.scss";

function CustomHeadline({ title }) {
  return (
    <h1 className="title">
      <span>{title[0]}</span>
      {title.slice(1)}
    </h1>
  );
}

export default CustomHeadline;
