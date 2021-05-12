import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import { fetchPostsType } from "../../store/actions/post";

class PostTypeLists extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    this.props.fetchPostsType(this.props.match.params.id);
  }
  render() {
    const { postsType } = this.props;
    console.log("postTypeLists",postsType);
    return (
      <div>
        {Object.keys(postsType).length === 0 ||
        postsType.postType.length === 0 ? (
          <div>投稿がありません</div>
        ) : (
          <div>
            {postsType.postType.map((post) => (
              <div key={post._id}>
                <ul>
                  <li>コメント: {post.comment}</li>
                  <li>感情メーター: {post.feelings}</li>
                  <li>気持ちアイコン: {post.icon}</li>
                  <li>テキスト: {post.text}</li>
                  <li>ユーザー: {post.user.username}</li>
                </ul>
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsType: state.postsType,
  };
};

export default connect(mapStateToProps, { fetchPostsType })(PostTypeLists);
