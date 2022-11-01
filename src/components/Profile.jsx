import React from "react";
import Avatar from "../assets/avatar.png";
const Profile = () => {
  return (
    <div>
      Profile
      <div className="avatar">
        <figure>
          <img src={Avatar} alt="Profile Avatar" id="profile_img" />
          <figcaption>Moses Fawole</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Profile;
