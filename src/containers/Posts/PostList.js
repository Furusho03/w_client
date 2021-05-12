import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../store/actions/post";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }
  render() {
    const {post} = this.props
    console.log(post)
    return (
      <div>
        {Object.keys(post).length === 0 ? (
          <div>投稿を見つけられませんでした</div>
        ): (
          <div>
            <ul>
              <li>コメント: {post.post.comment}</li>
              <li>感情メーター: {post.post.feelings}</li>
              <li>テキスト: {post.post.text}</li>
              <li>ユーザー: {post.post.user.username}</li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

export default connect(mapStateToProps, { fetchPost })(PostList);
