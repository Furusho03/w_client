import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// components
import Homepage from "../components/Homepage/Homepage";
import AuthForm from "../components/AuthForm/AuthForm";
// actions
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
// hoc
import withAuth from "../hocs/withAuth";
// containers
import UsersList from "./UsersList";
import ProfilePge from "./ProfilePge";
import ProfileUpdate from './ProfileUpdate'
import PasswordChange from './Passwordchange'
//  Book
import BookList from "./Books/BookList";
import BootTimeLine from "./Books/BookTimeLine";
// Post
import PostsList from "./Posts/PostsList";
import PostList from "./Posts/PostList";
import PostTypeLists from "./Posts/PostTypeLists";
import NewPost from "./Posts/NewPost";

const Main = (props) => {
  const { authUser, errors, currentUser } = props;
  return (
    <div className="hero-container">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/signin"
          render={(props) => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="ログイン"
                heading="ログイン"
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={(props) => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="アカウントを作成"
                heading="Toybox アカウントを作成"
                signUp
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/all-users"
          render={(props) => <UsersList {...props} />}
        />
        <Route exact path="/profile/:id" component={withAuth(ProfilePge)} />
        {/* --------------------------------------------------------------------------- */}
        <Route
          exact
          path="/books"
          render={(props) => <BookList {...props} />}
        />
        <Route
          exact
          path="/books/:id"
          render={(props) => <BootTimeLine {...props} />}
        />
        <Route exact path="/posts" render={(props) => <PostsList {...props}/>} />
        <Route
          exact
          path="/posts/:id/list"
          render={(props) => <PostList {...props} />}
        />
        <Route
          exact
          path="/posts/:id/lists"
          render={(props) => <PostTypeLists {...props} />}
        />
        <Route exact path="/posts/:id/new" component={withAuth(NewPost)} />
        <Route exact path="/profile/:id/update" component={withAuth(ProfileUpdate)} />
        <Route exact path="/profile/:id/change" component={withAuth(PasswordChange)} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  };
};

export default withRouter(connect(mapStateToProps, { authUser })(Main));
