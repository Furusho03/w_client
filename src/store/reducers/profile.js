// actionTypes
import {
  GET_PROFILE,
  GET_FOLLOW,
  PROFILE_UPDATE,
  CHANGE_PASSWORDS,
} from "../actionTypes";

export const profile = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
    case PROFILE_UPDATE:
    case CHANGE_PASSWORDS:
      return { ...action.profile };
    default:
      return state;
  }
};

export const follow = (state = {}, action) => {
  switch (action.type) {
    case GET_FOLLOW:
      return { ...action.follow };
    default:
      return state;
  }
};
