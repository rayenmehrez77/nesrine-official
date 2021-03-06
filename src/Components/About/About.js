import React from "react";
import "./About.scss";
import image from "../../assets/about-img.png";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import CustomHeadline from "../CustomHeadline/CustomHeadline";

function About() {
  return (
    <div className="about">
      <div className="about__content">
        <CustomHeadline title="Who is Nesrine" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quis eius
          laudantium voluptatem laboriosam sint minus soluta itaque omnis
          expedita! Enim modi quos veniam eum. Molestiae magnam modi nulla
          accusantium? Lorem ipsum .
        </p>
        <Link to="/about">
          <CustomButton>Read more</CustomButton>
        </Link>
      </div>
      <div className="about__imgBox">
        <img src={image} alt="nesrine" />
      </div>
    </div>
  );
}

export default About;
