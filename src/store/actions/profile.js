// services
import { apiCall } from "../../services/api";
// actions
import { addError } from "./errors";
// actionTypes
import {
  GET_PROFILE,
  GET_FOLLOW,
  PROFILE_UPDATE,
} from "../actionTypes";

export const getProfile = (profile) => ({
  type: GET_PROFILE,
  profile,
});

export const profileUpdate = (profile) => ({
  type: PROFILE_UPDATE,
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
        dispatch(getProfile(res));
      })
      .catch((err) => {
        addError(err.message);
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

export const updateProfile = (user_id, data) => async () => {
  console.log("action updateProfile", data);
  return apiCall("put", `/api/v1/profile/${user_id}/update`, data)
    .then((res) => {
      console.log("action profileUpdate", res);
      // dispatch(profileUpdate(res))
    })
    .catch((err) => {
      console.log("action profileupdate err", err);
      addError(err.message);
    });
};

export const changePassword = (user_id, data) => async () => {
  return apiCall("put", `/api/v1/profile/${user_id}/changep`, data)
    .then((res) => {
      console.log("change pass", res);
    })
    .catch((err) => {
      console.log("action profileupdate err", err);
      addError(err.message);
    });
};
