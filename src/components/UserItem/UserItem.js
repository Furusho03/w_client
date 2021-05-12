import React from 'react'

const UserItem = (props) => {
  return (
    <div>
      <ul>
        <h5>Username</h5>
        <li>{props.username}</li>
        <h5>Email</h5>
        <li>{props.email}</li>
      </ul>
    </div>
  )
}

export default UserItem