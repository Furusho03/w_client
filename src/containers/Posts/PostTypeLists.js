import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import PostTimeline from "../../components/PostTimeline";

import { fetchPostsType } from "../../store/actions/post";

class PostTypeLists extends Component {
  constructor(props) {
    super(props);
    props.fetchPostsType(this.props.match.params.id);
  }

  render() {
    const { postsType, loaddata } = this.props;
    return (
      <div>
        {loaddata === false ||
        postsType === null ||
        postsType.postsType.length === 0 ? (
          <div className="postsList-container">
            <div>投稿がありません</div>
          </div>
        ) : (
          <div className="postsList-container">
            {postsType.postsType.map((post) => (
              <PostTimeline post={post} key={post._id} />
            ))}
          </div>
        )}

        {/* {loaddata !== true ||
        Object.keys(postsType).length === 0 ||
        postsType.postsType.length === 0 ? (
          <div>投稿がありません</div>
        ) : (
          <div className="postsList-container">a
            {postsType.postsType.map((post) => (
              <PostTimeline post={post} key={post._id} />
            ))}
          </div>
        )} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    postsType: state.postsType.posts,
    loaddata: state.postsType.loaddata,
  };
};

export default connect(mapStateToProps, { fetchPostsType })(PostTypeLists);
