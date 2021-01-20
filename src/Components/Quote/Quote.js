import React from "react";
import "./Quote.scss";
import img from "../../assets/images/nesrine.png";

function Quote() {
  return (
    <div className="quote">
      <div className="quote__overlay"></div>
      <div className="quote__content">
        <img src={img} alt="nesrine" className="quote__img" />
        <h3>- Nesrine Beadhief -</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          excepturi sint quisquam consectetur eligendi doloremque eius
          distinctio voluptate tempore temporibus eaque ratione quae qui, quas
          iste cupiditate esse dolorum repellendus?
        </p>
      </div>
    </div>
  );
}

export default Quote;
