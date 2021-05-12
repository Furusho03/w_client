// services
import { apiCall } from "../../services/api";
// actions
import { addError } from "./errors";
// actionTypes
import { LOAD_USERS } from "../actionTypes";

export const loadUsers = (users) => ({
  type: LOAD_USERS,
  users,
});

export const fetchUsers = () => {
  return (dispatch) => {
    return apiCall("get", "/api/v1/users")
      .then((res) => {
        dispatch(loadUsers(res));
      })
      .catch((err) => {
        addError(err.message);
      });
  };
};

