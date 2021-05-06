import rootReducer from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      composeWithDevTools ? composeWithDevTools() : (f) => f
    )
  );

  return store;
}
