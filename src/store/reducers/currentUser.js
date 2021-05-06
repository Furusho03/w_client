// actionTypes
import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
  inAuthenticated: false, // ログインしたときに true
  user: {}, // ログイン時のすべてのユーザー情報
};

export const currentUser = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // 空のオブジェクトをfalseに、キーがあればtrueにする
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default:
      return state;
  }
};
