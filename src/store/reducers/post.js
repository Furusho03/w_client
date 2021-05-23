import {
  LOAD_POSTS,
  LOAD_POSTS_TYPE,
  LOAD_POST,
  LOAD_POSTS_ERROR,
  LOAD_MY_POST,
} from "../actionTypes";

const initialState = {
  posts: [],
  loaddata: false,
  errors: {},
};

export const posts = (state = initialState, action) => {
  const { type, posts } = action;

  switch (type) {
    case LOAD_POSTS:
      return { ...state, posts: posts, loaddata: true };
    case LOAD_POSTS_ERROR:
      return { ...state, errors: posts, loaddata: false };
    default:
      return state;
  }
};

export const postsType = (state = initialState, action) => {
  const { type, postsType } = action;
  switch (type) {
    case LOAD_POSTS_TYPE:
      return { ...state, posts: postsType, loaddata: true };
    default:
      return state;
  }
};

export const post = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POST:
      return { ...action.post };
    default:
      return state;
  }
};

export const myPost = (state = [], action) => {
  switch (action.type) {
    case LOAD_MY_POST:
      return { ...state, myPost: action.payload };
    default:
      return state;
  }
};
