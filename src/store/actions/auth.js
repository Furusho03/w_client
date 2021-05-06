// services
import { apiCall, setTokenHeader } from "../../services/api";
// actions
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return (dispatch) => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  return (dispatch) => {
    // APIの呼び出しを待つためにThunkをPromiseでラップ
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/v1/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("token", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          resolve(); // API呼び出しが成功した
        })
        .catch((err) => {
          dispatch(addError(err.message));
          reject(); // API呼び出しが失敗した
        });
    });
  };
}
