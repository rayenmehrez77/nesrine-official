import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./PodcastsPage.scss";
import ReactPlayer from "react-player";

function PodcastsPage() {
  return (
    <div className="podcasts-page">
      <NavigationComponent link="Podcasts" />
      <h2>Podcasts</h2>
      <ReactPlayer url="https://www.facebook.com/ena.ena.5815/videos/1782563848580222" />
    </div>
  );
}

export default PodcastsPage;
