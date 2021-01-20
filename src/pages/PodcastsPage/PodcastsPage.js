import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./PodcastsPage.scss";

function PodcastsPage() {
  return (
    <div className="podcasts-page">
      <NavigationComponent link="Podcasts" />
      <h1>Podcasts</h1>
    </div>
  );
}

export default PodcastsPage;
