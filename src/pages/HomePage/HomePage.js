import React from "react";
import Intro from "../../Components/Intro/Intro";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Quote from "../../Components/Quote/Quote";

const HomePage = () => {
  return (
    <>
      <Intro />
      <About />
      <Services />
      <Testimonials />
      <Quote />
    </>
  );
};

export default HomePage;
