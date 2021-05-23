import React from "react";
import Moment from "react-moment";

import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

const PostListItem = ({ post }) => {
  console.log(post);
  return (
    <div className="postsList" key={post._id}>
      <div>
        <div className="postsList-image-container">
          <h1 className="postsList-top-text">
            あなただったら何をしたいと思う？
          </h1>
          <img src={post.book.image} alt={post.book._id} />
          <div className="postsList-text-container">
            <div>{post.text}</div>
          </div>
        </div>
        <div className="postsList-comment">{post.comment}</div>
        <div className="postList-author">
          <div>{post.user.username}</div>
          <Moment format="YYYY/MM/DD">{post.createdAt}</Moment>
        </div>
      </div>
      <div className="postList-social">
        <a href="https://facebook.com">
          <img src={facebook} alt={facebook} />
        </a>
        <a href="https://insgagram.com">
          <img src={instagram} alt={instagram} />
        </a>
        <a href="https://twitter.com">
          <img src={twitter} alt={twitter} />
        </a>
      </div>
    </div>
  );
};

export default PostListItem;
