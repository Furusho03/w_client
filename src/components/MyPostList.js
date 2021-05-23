import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMyPost } from "../store/actions/post";
import PostListItem from "./PostListItem";

class MyPostList extends Component {
  componentDidMount() {
    this.props.fetchMyPost(this.props.currentUser);
  }

  renderList() {
    if (this.props.myPost.length === 0) {
      return <div>投稿がありません!</div>;
    } else if(this.props.myPost.length !== 0) {
      console.log(this.props)
      if(this.props.myPost.myPost.message) return <div>{this.props.myPost.myPost.message}</div>
      return this.props.myPost.myPost.posts.map((post) => {
        return (
          <div className="postsList-container" key={post._id}>
            <PostListItem post={post} />
          </div>
        )
      });
    } else {
      return <div>Loading .....</div>
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myPost: state.myPost,
    currentUser: state.currentUser.user.id,
  };
};

export default connect(mapStateToProps, { fetchMyPost })(MyPostList);
