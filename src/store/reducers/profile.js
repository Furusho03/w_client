// actionTypes
import {
  GET_PROFILE,
  GET_FOLLOW,
  PROFILE_UPDATE,
  CHANGE_PASSWORDS,
  LOAD_DATA,
  GET_PROFILE_ERROR
} from "../actionTypes";

export const profile = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
    case PROFILE_UPDATE:
    case CHANGE_PASSWORDS:
    case LOAD_DATA:
      return { ...action.profile, load: false };
    case GET_PROFILE_ERROR:
      return {...action, load: true}
    default:
      return state;
  }
};

export const load = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
    case PROFILE_UPDATE:
    case CHANGE_PASSWORDS:
    case LOAD_DATA:
      return { load: false };
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
