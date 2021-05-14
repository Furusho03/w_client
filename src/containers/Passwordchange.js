import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { changePassword } from "../store/actions/profile";
import { logout } from "../store/actions/auth";

class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      newPassword: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log("handleChangePassword");
    e.preventDefault();
    this.props.changePassword(this.props.currentUser, this.state);
    this.setState({
      password: "",
      newPassword: "",
    });
    this.props.logout()
  };

  render() {
    const { password, newPassword } = this.state;
    return (
      <div className="p-change">
        <form onSubmit={this.handleSubmit}>
          <p>
            パスワードを変更する場合は現在のパスワードを入力して新しいパスワードを入力してください
          </p>
          <label htmlFor="password">現在のパスワード</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <label htmlFor="newPassword">新しいパスワード</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={this.handleChange}
          />
          <button>パスワードを変更する</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    currentUser: state.currentUser.user.id,
  };
};

export default connect(mapStateToProps, {
  changePassword,
  logout,
})(ProfileUpdate);
