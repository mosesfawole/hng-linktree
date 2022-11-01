import React from "react";
import Avatar from "../assets/avatar.png";
import Share from "../assets/right-curved-arrow-8061.svg";
const Profile = () => {
  return (
    <div className="profile">
      <div className="avatar">
        <figure>
          <img src={Avatar} alt="Profile Avatar" id="profile_img" />
          <figcaption>
            <a href="https://twitter.com/pharwoleh" id="twitter">
              <b>Moses Fawole</b>
            </a>{" "}
          </figcaption>
        </figure>
      </div>
      <div className="share">
        <div className="desktop">
          <img
            className="share"
            src="https://img.icons8.com/ios/50/000000/forward-arrow.png"
          />
        </div>
        <div className="mobile">
          <p>...</p>
        </div>
      </div>
      <div className="">
        <a
          style={{ display: "none" }}
          href="https://slack.com/mosesfawole"
          id="slack"
        ></a>
      </div>
    </div>
  );
};

export default Profile;
