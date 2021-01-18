import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./BlogPage.scss";

function BlogPage() {
  return (
    <div className="blog-page">
      <NavigationComponent link="Blog" />
      <h1>Blog Page</h1>
    </div>
  );
}

export default BlogPage;
