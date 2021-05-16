import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../store/actions/post";
import PostTimeLine from "../../components/PostTimeline";

class PostsList extends Component {
  constructor(props) {
    super(props);
    props.fetchPosts();
  }

  render() {
    const { posts, loaddata } = this.props;
    return (
      <div>
        <div className="postsList-container">

          {loaddata === false || posts.posts.length === 0 ? (
            <div>投稿はありません</div>
          ) : (
            <>
              {posts.posts.map((post) => (
                <PostTimeLine post={post} key={post._id} />
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loaddata: state.posts.loaddata,
    errors: state.posts.errors
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
