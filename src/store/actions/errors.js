// actionTypes
import {
  ADD_ERROR,
  REMOVE_ERROR,
  ADD_NEW_ERROR,
  NEW_POST_ERROR,
} from "../actionTypes";

export const addError = (error) => ({
  type: ADD_ERROR,
  error,
  load: true,
});

export const removeError = () => ({
  type: REMOVE_ERROR,
});

// ------------------------------------------
export const newAddError = (error) => ({
  type: ADD_NEW_ERROR,
  error,
});

export const newPostError = (error) => ({
  type: NEW_POST_ERROR,
  error,
});

export const removeNewError = (error) => ({
  type: REMOVE_ERROR,
  error,
});
