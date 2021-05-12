import React from "react";
import FollowList from "../FollowList";

const ProfileItem = ({ profile, currentUser, follow }) => {
  console.log("follow",follow)
  return (
    <div>
      {currentUser && (
        <ul>
          <h6>ユーザー名:</h6>
          <li>{profile.username}</li>
          <br />
          <h6>メールアドレス:</h6>
          <li>{profile.email}</li>
          <br />
          <h6>フォローした人</h6>
          {follow === undefined || follow.length === 0 ? (<div>フォローしていません</div>): (
            <div>
              {follow.map(f => (
                <FollowList key={f._id} username={f.username} />
              ))}
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default ProfileItem;
