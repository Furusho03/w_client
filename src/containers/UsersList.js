import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { fetchUsers } from "../store/actions/users";
// component
import UserItem from "../components/UserItem/UserItem";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user) => (
          <UserItem
            key={user._id}
            username={user.username}
            email={user.email}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
