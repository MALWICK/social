import React from "react";
import "../profile/profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sideBar/Sidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Feed from "../../components/feed/Feed";
import fine from "../../Assets/persons/7.jpeg"
import back from "../../Assets/post/3.jpeg"

function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={back}
              alt=""
            />
            <img
              className="profileUserImg"
              src={fine}
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">Bata Humphrey</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
);
}

export default Profile;
