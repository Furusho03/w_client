import React from "react";
import { Link } from "react-router-dom";
import './BookItem.css'

const BookList = ({ id, title, text, image,}) => {
  return (
    <div className="bookList-container">
      <Link to={`/books/${id}`}>
        <h1>{title}</h1>
        <h4>{text}</h4>
        <img src={image} alt={image} />
      </Link>
    </div>
  );
};

export default BookList;
