import React, { Component } from "react";
import { connect } from "react-redux";

const withAuth = (ComponentToBeRendered) => {
  class Authenticate extends Component {
    componentDidMount() {
      if (this.props.isAuthenticated === false || this.props.isAuthenticated === undefined) {
        this.props.history.push("/signin");
      }
    }

    componentDidUpdate(nextProps) {
      if (nextProps.isAuthenticated === false || nextProps.isAuthenticated === undefined) {
        this.props.history.push("/signin");
      }
    }

    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.currentUser.isAuthenticated,
    };
  };

  return connect(mapStateToProps)(Authenticate);
};

export default withAuth;
