import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar__title">Nesrine Bedhief</h1>
      </Link>
      <div className="navbar__menu-icon" onClick={handleClick}>
        {clicked ? (
          <FaTimes className="navbar__icon" />
        ) : (
          <FiMenu className="navbar__icon" />
        )}
      </div>
      <ul className={clicked ? "navbar__nav active" : "navbar__nav"}>
        <li>
          <Link to="/" className="navbar__link" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar__link" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar__link" onClick={handleClick}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/blog" className="navbar__link" onClick={handleClick}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar__link" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
      <a
        target="_blank"
        href="https://www.groupado.tn/fr/experience/OgQUK0IE/business-mkhk-yaqf"
        className="navbar__book"
      >
        Book Now
      </a>
    </nav>
  );
}

export default Navbar;
