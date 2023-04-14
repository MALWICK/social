import React from "react";
import birthday from "../../Assets/gift.png";
import Ads from "../../Assets/ad.png";
import "../rightBar/rightbar.css";
import { Users } from "../../dummyData";
import Oline from "../online/Oline";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdatContainer">
          <img className="birthdayImg" src={birthday} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src={Ads} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Oline key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
