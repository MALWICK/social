import React from "react";
import birthday from "../../Assets/gift.png";
import Ads from "../../Assets/ad.png";
import person3 from "../../Assets/persons/3.jpeg"
import "../rightBar/rightbar.css";

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={person3} alt="" />
               <span className="rightbarOnline"></span>
            </div>
            <span className="rigthbarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
