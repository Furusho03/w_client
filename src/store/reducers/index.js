import { combineReducers } from "redux";
// reducers
import { currentUser } from "./currentUser";
import { errors } from "./errors";
import { users } from "./users";
import { profile, follow } from "./profile";
import { books, book } from "./books";
import { posts, postsType, post } from "./post";

const rootReducer = combineReducers({
  currentUser,
  errors,
  users,
  profile,
  follow,
  books,
  book,
  posts,
  postsType,
  post,
});

export default rootReducer;
