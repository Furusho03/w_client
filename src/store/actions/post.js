// services
import { apiCall } from "../../services/api";
// actions
import { addError, newPostError } from "./errors";
// actionTypes
import {
  LOAD_POSTS,
  LOAD_POSTS_TYPE,
  LOAD_POST,
  LOAD_POSTS_ERROR,
  LOAD_MY_POST,
} from "../actionTypes";

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts,
});

export const loadPost = (post) => ({
  type: LOAD_POST,
  post,
});

export const loadPostError = (error) => ({
  type: LOAD_POSTS_ERROR,
  error,
});

export const fetchPosts = () => {
  return (dispatch) => {
    return apiCall("get", "/api/v1/posts")
      .then((res) => {
        dispatch(loadPosts(res));
      })
      .catch((err) => {
        console.error("action fetchPosts error", err);
        dispatch(loadPostError(err));
      });
  };
};

export const fetchPostsType = (book_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/posts/${book_id}/lists`)
      .then((res) => {
        dispatch({
          type: LOAD_POSTS_TYPE,
          postsType: res,
        });
      })
      .catch((err) => {
        addError(err.message);
      });
  };
};

export const fetchPost = (post_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/posts/${post_id}/list`)
      .then((res) => {
        dispatch(loadPost(res));
      })
      .catch((err) => {
        addError(err.message);
      });
  };
};

export const fetchMyPost = (user_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/posts/${user_id}/my-posts`)
    .then(res => {
      dispatch({type: LOAD_MY_POST, payload: res})
    }).catch(err => {
      console.error(err)
    })
  };
};


export const newPost = (book_id, postData) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    return apiCall("post", `/api/v1/posts/${book_id}/new`, postData)
      .then((res) => {
        resolve();
      })
      .catch((err) => {
        dispatch(newPostError(err.errors));
        reject();
      });
  });
};
