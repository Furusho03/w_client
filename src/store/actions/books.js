// services
import { apiCall } from "../../services/api";
// actions
import { addError } from "./errors";
// actionTypes
import { LOAD_BOOKS, READ_BOOK } from "../actionTypes";

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

export const loadBook = (book) => ({
  type: READ_BOOK,
  book,
});

export const fetchBooks = () => {
  return (dispatch) => {
    return apiCall("get", "/api/v1/books")
      .then((res) => {
        dispatch(loadBooks(res));
      })
      .catch((err) => {
        // addError(err.message);
      });
  };
};

export const fetchBook = (book_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/books/${book_id}`)
      .then((res) => {
        dispatch(loadBook(res));
      })
      .catch((err) => {
        console.log(err);
        addError(err.message);
      });
  };
};

