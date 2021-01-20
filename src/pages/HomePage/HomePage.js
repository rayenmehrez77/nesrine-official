import React from "react";
import "./HomePage.scss";
import Intro from "../../Components/Intro/Intro";
import "./HomePage.scss";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Quote from "../../Components/Quote/Quote";

const HomePage = () => {
  return (
    <div className="homePage">
      <Intro />
      <About />
      <Services />
      <Testimonials />
      <Quote />
    </div>
  );
};

export default HomePage;
