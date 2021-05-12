// services
import { apiCall } from "../../services/api";
// actions
import { addError } from "./errors";
// actionTypes
import { GET_PROFILE, GET_FOLLOW } from "../actionTypes";

export const getProfile = (profile) => ({
  type: GET_PROFILE,
  profile,
});

export const getFollow = (follow) => ({
  type: GET_FOLLOW,
  follow,
});

export const fetchProfile = (user_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/profile/${user_id}`)
      .then((res) => {
        dispatch(getProfile(res))
      })
      .catch((err) => {
        addError(err.message)
      });
  };
};


export const getFollo = (user_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/v1/users/${user_id}/follow/`)
      .then((res) => {
        dispatch(getFollow(res));
      })
      .catch((err) => {
        addError(err.message);
      });
  };
};