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
      console.log("b", this.props.posts.message);
      return <div>{this.props.posts.message}</div>;
    } else if (this.props.length !== 0) {
      console.log("a");
      return <div>a</div>;
    } else {
      console.log("c");
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
    const { posts, loaddata } = this.props;
    console.log(posts);
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
