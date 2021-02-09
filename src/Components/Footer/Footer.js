import React from "react";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <h1>Nesrine Bedhief | Business and Life Strategist</h1>
        <h2>
          <span>Ariana, Tunisia</span>
        </h2>
      </div>
      <span className="footer__copyright">
        © 2021 All right reserved. Develop by{" "}
        <a href="http://rayenmehrez.netlify.com/" target="_blank">
          Rayen Mehrez
        </a>
      </span>
      <div className="footer__social-media">
        <a href="https://www.facebook.com/ena.ena.5815" target="_blank">
          <FaFacebook className="footer__social-media-icon" />
        </a>
        <a href="https://www.instagram.com/nesrine_bedhief/" target="_blank">
          <GrInstagram className="footer__social-media-icon" />
        </a>
        <a
          target="_blank"
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnesrine-bedhief-2b54771a6%3Ffbclid%3DIwAR0p9xD8ij6ioZFr38RDg8Ea2do-itP8q-K3aWfKxJTcN_1C3D3ioxwmWCY&h=AT2eDeA1qK2THk20HdX6rbys2302VEIDWJ6saQP2OLijfG-6A_024FntiuirDsbDLCydCACVzSyLZAFYhEnVcNTKDtkb3xKx6LAveJo4DlaBiHTq_LKIiUOSdvG2Ol-L9e1oAw"
        >
          <AiFillLinkedin className="footer__social-media-icon" />
        </a>
        <a
          target="_blank"
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fchannel%2FUCae5QmRz-41xFk9p0z466BA%3Ffbclid%3DIwAR3Py_nRIn7tzklA-YuwYjMQ2xoMtcpoIrXJUftLPyEv1zT3ZY_OugCCuRc&h=AT2eDeA1qK2THk20HdX6rbys2302VEIDWJ6saQP2OLijfG-6A_024FntiuirDsbDLCydCACVzSyLZAFYhEnVcNTKDtkb3xKx6LAveJo4DlaBiHTq_LKIiUOSdvG2Ol-L9e1oAw"
        >
          <GrYoutube className="footer__social-media-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
