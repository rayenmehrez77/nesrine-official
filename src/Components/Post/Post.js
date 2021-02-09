import React from "react";
import { withRouter } from "react-router-dom";

import "./Post.scss";

function Post({ post, match, history }) {
  const {
    author,
    title,
    category,
    description,
    date,
    image,
    Photo,
    readtime,
    linkUrl,
  } = post;
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
        <span
          className="post__readmore"
          onClick={() => history.push(`${match.path}/${title}`)}
        >
          read more
        </span>
      </div>
    </div>
  );
}

export default withRouter(Post);
