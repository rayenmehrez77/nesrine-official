import React from "react";
import { Link } from "react-router-dom";
import "./Post.scss";

function Post({ post }) {
  const { author, title, description, date, image, Photo, readtime } = post;
  return (
    <div className="post">
      <div className="post__imgbox">
        <img src={image} alt={title} />
      </div>
      <div className="post__content">
        <div className="post__author">
          <img src={Photo} alt={title} />
          <div className="post__author-info">
            <h4>
              <span>{author}</span>
              <span>
                {date} • read {readtime} min
              </span>
            </h4>
          </div>
        </div>
        <h1 className="post__title">{title}</h1>
        <p className="post__desc">{description}</p>
        <Link to="/" className="post__readmore">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Post;
