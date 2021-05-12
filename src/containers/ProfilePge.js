import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { fetchProfile, getFollo } from "../store/actions/profile";
// component
import ProfileItem from "../components/ProfileItem/ProfileItem";

class ProfilePge extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.currentUser)
    this.props.getFollo(this.props.currentUser)
  }

  render() {
    const { profile, currentUser, follow } = this.props;
    return <ProfileItem profile={profile} currentUser={currentUser} follow={follow.followUser} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    follow: state.follow,
    currentUser: state.currentUser.user.id
  };
};

export default connect(mapStateToProps, { fetchProfile, getFollo })(ProfilePge);
