import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./AboutPage.scss";
import ReactPlayer from "react-player";

function AboutPage() {
  return (
    <div className="about-page">
      <NavigationComponent link="About" />
      <h2>About me</h2>
      <ReactPlayer
        onStart
        playing
        url="https://www.youtube.com/watch?v=qfjfx0XnxgA&t=2s"
        className="about-page__video"
      />
    </div>
  );
}

export default AboutPage;
