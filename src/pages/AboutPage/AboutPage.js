import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <div className="about-page">
      <NavigationComponent link="About" />
      <h1>About Page</h1>
    </div>
  );
}

export default AboutPage;
