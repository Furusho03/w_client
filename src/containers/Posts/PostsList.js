import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../store/actions/post";
import PostTimeLine from "../../components/PostTimeline";

class PostsList extends Component {
  constructor(props) {
    super(props);
    props.fetchPosts();
  }

  renderList() {
    if (this.props.posts.message) {
      return <div>{this.props.posts.message}</div>;
    } else if (this.props.length !== 0 && this.props.loaddata === true) {
      console.log(this.props);
      return this.props.posts.posts.map((post) => {
        return <PostTimeLine post={post} key={post._id} />;
      });
    } else {
      return <div>投稿はありません!</div>;
    }
  }

  /* {Object.keys(posts).length === 0 || loaddata === false || posts.posts.length === 0   ? (
            <div>投稿はありません</div>
          ) : (
            <>
              {posts.posts.map((post) => (
                <PostTimeLine post={post} key={post._id} />
              ))}
            </>
          )} */

  render() {
    return (
      <div>
        <div className="postsList-container">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loaddata: state.posts.loaddata,
    errors: state.posts.errors,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
