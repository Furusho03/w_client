import React from "react";
import FollowList from "../FollowList";

const ProfileItem = ({ profile, currentUser, follow, load }) => {
  return (
    <div>
      {currentUser && load === false ? (
        <div>
          <div className="profileItem-item  item-username">
            <div>ユーザー名:</div>
            <div>{profile.username}</div>
          </div>
          <div className="profileItem-item  item-email">
            <div>メールアドレス:</div>
            <div>{profile.email}</div>
          </div>
          <h4>フォローした人</h4>
          {follow === undefined || follow.length === 0 ? (
            <div>フォローしていません</div>
          ) : (
            <div>
              {follow.map((f) => (
                <FollowList key={f._id} username={f.username} />
              ))}
            </div>
          )}
        </div>
      ) : (<div>?</div>)}
    </div>
  );
};

export default ProfileItem;
