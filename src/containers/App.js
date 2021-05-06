import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import jwtDecode from "jwt-decode";
// store
import { configureStore } from "../store/index";
// containers
import Navbar from "./Navbar";
import Main from "./Main";
// actions
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";

const store = configureStore();

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  // localStorageのtokenが正しいか
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.token)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
