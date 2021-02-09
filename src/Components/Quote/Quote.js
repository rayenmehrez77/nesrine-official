import React from "react";
import "./Quote.scss";
import img from "../../assets/quote-img.png";

function Quote() {
  return (
    <div className="quote">
      <div className="quote__overlay"></div>
      <div className="quote__content">
        <img src={img} alt="nesrine" className="quote__img" />
        <h3>- Nesrine BEDHIEF-</h3>
        <p>" I want to be the reason 🙏of your best version 🚀🚀 "</p>
      </div>
    </div>
  );
}

export default Quote;
