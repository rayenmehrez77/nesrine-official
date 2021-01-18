import React from "react";
import image from "../../assets/images/nesrine.png";
import imgbg from "../../assets/images/circles.svg";
import "./Intro.scss";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__desc">
        <h1>Welcome,</h1>
        <h3>DISCOVER YOUR PURPOSE</h3>
        <h4>And start the journey with me</h4>
      </div>
      <div className="intro__imgBox">
        <img src={image} alt="nesrine bedhief" className="intro__imgBox-1" />
        <img src={imgbg} alt="bg" className="intro__imgBox-2" />
      </div>
    </div>
  );
}

export default Intro;
