import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__navbar">
        <Link to="/">
          <h1 className="header__navbar-title">Nesrine Bedhief</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/" className="header__navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="header__navbar-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="header__navbar-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="header__navbar-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header__navbar-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <a
          target="_blank"
          href="https://www.groupado.tn/fr/experience/OgQUK0IE/business-mkhk-yaqf"
          className="header__navbar-book"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}

export default Header;
