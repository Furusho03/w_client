import { LOAD_POSTS, LOAD_POSTS_TYPE, LOAD_POST } from "../actionTypes";

export const posts = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {...action.posts};
    default:
      return state;
  }
};

export const postsType = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POSTS_TYPE:
      return {...action.postsType};
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
