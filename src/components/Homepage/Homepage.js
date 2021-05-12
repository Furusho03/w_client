import React from "react";
import { Link } from "react-router-dom";
// components
import PostsList from "../../containers/Posts/PostsList";
import './Homepage.css'

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>ようこそ ToyBox へ</h1>
        <h4>投稿してみませんか？</h4>
        <Link to="/signup" className="h-btn">
          アカウントを作成する
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PostsList />
    </div>
  );
};

export default Homepage;
