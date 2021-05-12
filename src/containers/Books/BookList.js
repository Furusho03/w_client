import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../../store/actions/books";

import BookItem from "../../components/BookItem/BookItem";

import './BookList.css';

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        {books.length === 0 ? (
          <div>Bookが存在しません</div>
        ) : (
          <div className="bookList-container">
            {books.map((book) => (
              <BookItem key={book._id} id={book._id} title={book.title} text={book.text} image={book.image} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps, { fetchBooks })(BookList);
