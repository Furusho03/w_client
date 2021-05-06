import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// components
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
// actions
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
// hoc
import withAuth from "../hocs/withAuth";
// containers
import MessageForm from './MessageForm'

const Main = (props) => {
  const { authUser, errors, currentUser } = props;
  return (
    <div className="container">
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
                buttonText="Login"
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
                buttonText="Sign me up"
                heading="Warbler アカウントを作成"
                signUp
                {...props}
              />
            );
          }}
        />
        <Route
          path="/users/:id/messages/new"
          component={withAuth(MessageForm)}
        />
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
