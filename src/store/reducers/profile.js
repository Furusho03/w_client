// actionTypes
import { GET_PROFILE, GET_FOLLOW } from "../actionTypes";

export const profile = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...action.profile };
    default:
      return state;
  }
};

export const follow = (state = {}, action) => {
  switch (action.type) {
    case GET_FOLLOW:
      return {...action.follow};
    default:
      return state;
  }
};
