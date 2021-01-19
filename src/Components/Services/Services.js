import React from "react";
import "./Services.scss";
import { ReactComponent as Rank } from "../../assets/svg/002-rank.svg";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <div className="services__overlay"></div>
      <h1 className="services__title">
        <span>S</span>
        ervices
      </h1>
      <div className="services__products">
        <Product title="Improve my career" Icon={Rank} />
        <Product title="Improve my career" Icon={Rank} />
        <Product title="Improve my career" Icon={Rank} />
        <Product title="Improve my career" Icon={Rank} />
        <Product title="Improve my career" Icon={Rank} />
        <Product title="Improve my career" Icon={Rank} />
      </div>
      <Link to="/services" className="services__products-link">
        All services
      </Link>
    </div>
  );
}

export default Services;
