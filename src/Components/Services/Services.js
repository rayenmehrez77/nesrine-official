import React from "react";
import "./Services.scss";
import { ReactComponent as Rank } from "../../assets/svg/002-rank.svg";
import { ReactComponent as Brain } from "../../assets/svg/011-brain.svg";
import { ReactComponent as Success } from "../../assets/svg/018-success.svg";
import { ReactComponent as Heart } from "../../assets/svg/031-heart.svg";
import { ReactComponent as Idea } from "../../assets/svg/032-idea.svg";
import { ReactComponent as Direction } from "../../assets/svg/040-direction.svg";
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
        <Product title="Improve my career" Icon={Brain} />
        <Product title="Improve my career" Icon={Success} />
        <Product title="Improve my career" Icon={Heart} />
        <Product title="Improve my career" Icon={Idea} />
        <Product title="Improve my career" Icon={Direction} />
      </div>
      <Link to="/services" className="services__products-link">
        All services
      </Link>
    </div>
  );
}

export default Services;
