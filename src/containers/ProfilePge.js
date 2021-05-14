import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// actions
import {
  fetchProfile,
  getFollo,
  profileUpdate,
} from "../store/actions/profile";
// component
import ProfileItem from "../components/ProfileItem/ProfileItem";

class ProfilePge extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.currentUser);
    this.props.getFollo(this.props.currentUser);
  }

  render() {
    const { profile, currentUser, follow } = this.props;
    console.log(profile);
    return (
      <div className="profile-page-container">
        <ProfileItem
          profile={profile}
          currentUser={currentUser}
          follow={follow.followUser}
        />
        <Link to={`/profile/${currentUser}/update`}>プロフィールを更新する</Link>
        <Link to={`/profile/${currentUser}/change`}>パスワードを変更する</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    follow: state.follow,
    currentUser: state.currentUser.user.id,
  };
};

export default connect(mapStateToProps, {
  fetchProfile,
  getFollo,
  profileUpdate,
})(ProfilePge);
