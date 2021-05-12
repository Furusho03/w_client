import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchBook } from "../../store/actions/books";

class BookTimeLine extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
    console.log("booktimeline", this.props);
  }

  render() {
    const { book, currentUser } = this.props;
    console.log(book);
    return (
      <div className="bookTimeLine-container">
        {book[0] === undefined || book[0].lenggth === 0 ? (
          <div>bookが存在しません</div>
        ) : (
          <div>
            <div>
              <h2>{book[0].title}</h2>
              <h3>{book[0].text}</h3>
              <img src={book[0].image} alt={book[0].image} />
            </div>
            <div className="bookTimeLine-link">
              <Link
                className="bookTimeLine-show"
                to={`/posts/${book[0]._id}/lists`}
              >
                投稿を見る
              </Link>
              <br />
              {currentUser && (
                <Link
                  className="bookTimeLine-post"
                  to={`/posts/${book[0]._id}/new`}
                >
                  投稿する
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("booktimeline state", state);
  return {
    currentUser: state.currentUser.isAuthenticated,
    book: state.book,
  };
};

export default connect(mapStateToProps, { fetchBook })(BookTimeLine);
