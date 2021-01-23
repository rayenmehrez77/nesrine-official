import React from "react";
import "./Services.scss";
import { ReactComponent as Rank } from "../../assets/svg/002-rank.svg";
import { ReactComponent as Brain } from "../../assets/svg/011-brain.svg";
import { ReactComponent as Success } from "../../assets/svg/018-success.svg";
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
        <Product
          title="
            Prioritization and goal setting in a strategic way"
          Icon={Rank}
        />
        <Product
          title="
            Turn your idea into a business on instagram"
          Icon={Brain}
        />
        <Product
          title="Solve your business problem
"
          Icon={Success}
        />
      </div>
      {/* <Link to="/services">Read more</Link> */}
    </div>
  );
}

export default Services;
