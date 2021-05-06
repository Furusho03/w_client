// services
import { apiCall } from "../../services/api";
// actions
import { addError } from "./errors";
// actionTypes
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  messages,
});

export const remove = (id) => ({
  type: REMOVE_MESSAGE,
  id,
});

export const removeMessage = (user_id, message_id) => {
  return (dispatch) => {
    return apiCall("delete", `/api/v1/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch((err) => addError(err.message));
  };
};

export const fetchMessages = () => {
  return (dispatch) => {
    return apiCall("get", "/api/v1/messages")
      .then((res) => {
        dispatch(loadMessages(res));
      })
      .catch((err) => {
        addError(err.message);
      });
  };
};

export const postNewMessage = (text) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/v1/users/${id}/messages`, { text })
    .then((res) => {})
    .catch((err) => {
      addError(err.message);
    });
};
