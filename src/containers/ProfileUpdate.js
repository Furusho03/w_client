import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { updateProfile } from "../store/actions/profile";
class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.profile.username,
      age: this.props.profile.age,
      email: this.props.profile.email,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    this.props.updateProfile(this.props.currentUser, this.state);
    this.setState({
      username: "",
      age: "",
      email: "",
    });
    this.props.history.push(`/profile/${this.props.currentUser}`);
  };


  render() {
    const { username, age, email } = this.state;
    return (
      <div className="p-updateProfile">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">ユーザーネーム</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="age">年齢</label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          <label htmlFor="email">メールアドレス</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <button>プロファイルを更新</button>
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
  updateProfile,
})(ProfileUpdate);
