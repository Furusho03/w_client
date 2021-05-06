import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// action
import { logout } from "../store/actions/auth";
// image
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Warbler Home" />
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  to={`/users/${this.props.currentUser.user.id}/messages/new`}
                >
                  メッセージ投稿
                </Link>
              </li>
              <li>
                <a href="#!" onClick={this.logout}>ログアウト</a>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/signup">登録</Link>
              </li>
              <li>
                <Link to="/signin">ログイン</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
