import { LOAD_BOOKS, READ_BOOK } from "../actionTypes";

export const books = (state = [], action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return [...action.books];
    default:
      return state;
  }
};

export const book = (state = {} , action) => {
  switch (action.type) {
    case READ_BOOK:
      return  {...action.book} ;
    default:
      return state;
  }
};
