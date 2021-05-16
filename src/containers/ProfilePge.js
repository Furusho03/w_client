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
  constructor(props) {
    super(props);
    props.fetchProfile(this.props.currentUser);
    props.getFollo(this.props.currentUser);
  }

  componentDidMount() {
    // this.props.fetchProfile(this.props.currentUser);
    // this.props.getFollo(this.props.currentUser);
  }

  render() {
    const { profile, currentUser, follow, load } = this.props;
    return (
      <div className="profile-page-container">
        <ProfileItem
          load={load.load}
          profile={profile}
          currentUser={currentUser}
          follow={follow.followUser}
        />
        <Link to={`/profile/${currentUser}/update`}>
          プロフィールを更新する
        </Link>
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
    load: state.load,
  };
};

export default connect(mapStateToProps, {
  fetchProfile,
  getFollo,
  profileUpdate,
})(ProfilePge);
