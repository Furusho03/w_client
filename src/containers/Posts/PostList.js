import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../store/actions/post";
import PostListItem from '../../components/PostListItem'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  render() {
    const { post } = this.props;
    return (
      <div>
        {Object.keys(post).length === 0 ? (
          <div>投稿を見つけられませんでした</div>
        ) : (
          <div className="postsList-container">
            <PostListItem post={post.post} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

export default connect(mapStateToProps, { fetchPost })(PostList);
