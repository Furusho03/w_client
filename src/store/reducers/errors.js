// actionTypes
import {
  ADD_ERROR,
  REMOVE_ERROR,
  ADD_NEW_ERROR,
  NEW_POST_ERROR,
} from "../actionTypes";

let initialState = {
  message: null,
  post: true,
};

export const errors = (state = {}, action) => {
  switch (action.type) {
    case ADD_ERROR:
      console.log(state, action.error);
      return { ...state, message: action.error };
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
};

export const newError = (state = initialState, action) => {
  const { type, error } = action;
  switch (type) {
    case ADD_NEW_ERROR:
      return { ...state, message: error };
    case NEW_POST_ERROR:
      return { ...state, message: error, post: false };
    case REMOVE_ERROR:
      return { ...state, message: null, post: true };
    default:
      return state;
  }
};

export const removeError = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
};
