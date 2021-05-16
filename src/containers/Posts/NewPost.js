import React, { Component } from "react";
import { connect } from "react-redux";
import { newPost } from "../../store/actions/post";
import { fetchBook } from "../../store/actions/books";
import NewPostForm from "../../components/NewPostForm";

class NewPost extends Component {
  constructor(props) {
    super(props);
    props.fetchBook(this.props.match.params.id);
    console.log("thsi.props", props.history);
  }

  render() {
    const { book, newError } = this.props;
    return (
      <div className="newPost-wrapper">
        {Object.keys(book).length === 0 ? (
          <div>No book</div>
        ) : (
          <div>
            <NewPostForm
              book={book}
              newError={newError}
              newPost={this.props.newPost}
              params={this.props.match.params.id}
              history={this.props.history}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newError: state.newError,
    post: state.newError.post,
    book: state.book,
  };
};

export default connect(mapStateToProps, { newPost, fetchBook })(NewPost);
