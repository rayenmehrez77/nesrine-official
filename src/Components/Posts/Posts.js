import React from "react";
import "./Posts.scss";
import Post from "../Post/Post";

function Posts({ filteredPosts }) {
  return (
    <div className="posts">
      {filteredPosts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default Posts;
