import { combineReducers } from "redux";
// reducers
import { currentUser } from "./currentUser";
import { errors, newError } from "./errors";
import { users } from "./users";
import { profile, follow, load} from "./profile";
import { books, book } from "./books";
import { posts, postsType, post } from "./post";

const rootReducer = combineReducers({
  currentUser,
  errors,
  newError,
  users,
  profile,
  follow,
  load,
  books,
  book,
  posts,
  postsType,
  post,
});

export default rootReducer;
