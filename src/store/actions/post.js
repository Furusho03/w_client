// services
import { apiCall } from "../../services/api";
// actions
import { addError } from "./errors";
// actionTypes
import { LOAD_POSTS, LOAD_POSTS_TYPE, LOAD_POST } from "../actionTypes";

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts,
});

export const loadPostsType = (postsType) => ({
  type: LOAD_POSTS_TYPE,
  postsType,
});

export const loadPost = (post) => ({
  type: LOAD_POST,
  post,
});

export const fetchPosts = () => {
  return (dispatch) => {
    return apiCall("get", "/api/v1/posts")
      .then((res) => {
        console.log("action fetchPosts", res);
        dispatch(loadPosts(res));
      })
      .catch((err) => {
        console.error("action fetchPosts error", err);
        // addError(err.message);
      });
  };
};

export const fetchPostsType = (book_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/posts/${book_id}/lists`)
      .then((res) => {
        console.log("action fetchPostsType", res);
        dispatch(loadPostsType(res));
      })
      .catch((err) => {
        console.error("action fetchPostsType error", err);
        addError(err.message);
      });
  };
};

export const fetchPost = (post_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/posts/${post_id}/list`)
      .then((res) => {
        console.log("action fetchPost", res);
        dispatch(loadPost(res));
      })
      .catch((err) => {
        console.error("action fetchPost error", err);
        addError(err.message);
      });
  };
};

export const newPost = (book_id, postData) => async () => {
  console.log(postData);
  return apiCall("post", `/api/v1/posts/${book_id}/new`, postData)
    .then((res) => {
      console.log("action newPost", res);
    })
    .catch((err) => {
      console.error("action newPost error", err);
      addError(err);
    });
};
