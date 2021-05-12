import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// action
import { logout } from "../../store/actions/auth";
// image
import toyboxLogo from "../../images/toybox-logo.png";
// css
import "./Navbar.css";

class Navbar extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="navbar-header">
            <Link to="/" className="navbar-logo">
              <img src={toyboxLogo} alt="Warbler Home" />
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul className="nav-login-right">
              {/* <li>
                <Link to={"/posts"}>全ての投稿</Link>
              </li> */}
              <li>
                <Link to={"/books"}>Books</Link>
              </li>
              <li>
                <Link to={`/profile/${this.props.currentUser.user.id}/`}>
                  プロファイル
                </Link>
              </li>
              <li>
                <Link to="/all-users">すべてのユーザー</Link>
              </li>
              <li>
                <a href="#!" onClick={this.logout}>
                  ログアウト
                </a>
              </li>
            </ul>
          ) : (
            <ul className="nav-right">
              <li>
                <Link to={"/posts"}>全ての投稿</Link>
              </li>
              <li>
                <Link to={"/books"}>Books</Link>
              </li>
              <li>
                <Link to="/signup">アカウントを作成</Link>
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
