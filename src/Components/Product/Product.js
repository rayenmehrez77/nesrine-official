import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

function Product({ Icon, title }) {
  return (
    <div className="product">
      <Icon className="product__icon" />
      <div className="product__info">
        <h3>{title}</h3>
        <Link to="/services">Read more</Link>
      </div>
    </div>
  );
}

export default Product;
