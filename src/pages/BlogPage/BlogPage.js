import React, { useState } from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./BlogPage.scss";
import { data } from "../../data/Posts";
import Post from "../../Components/Post/Post";

function BlogPage() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredByCategory = data.filter((item) => {
    if (item.category.includes(search)) {
      return item;
    } else if (search === "All Posts") {
      return data;
    } else {
      return null;
    }
  });

  return (
    <div className="blog-page">
      <NavigationComponent link="Blog" />
      <div className="blog-page__top">
        <h2>{`${search ? search : "All Posts"}`}</h2>
        <select className="blog-page__options" onChange={handleSearch}>
          <option value="All Posts">All Posts</option>
          <option value="Business">Business</option>
          <option value="Relationship">Relationship</option>
          <option value="Self improvement">Self improvement</option>
        </select>
      </div>
      <div className="blog-page__posts">
        {filteredByCategory.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default BlogPage;
