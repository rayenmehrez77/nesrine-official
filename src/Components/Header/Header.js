import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__title">Nesrine Bedhief</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="header__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="header__link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" className="header__link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="header__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <a
        target="_blank"
        href="https://www.groupado.tn/fr/experience/OgQUK0IE/business-mkhk-yaqf"
        className="header__book"
      >
        Book Now
      </a>
    </div>
  );
}

export default Header;
