import React from "react";
import "../topbar/Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import topbarimage from "../../Assets/persons/1 (1).jpeg";

function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="logo">Rechart Me!</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <Search className="searchicon" />
          <input
            type="text"
            placeholder="Search  for freinds, post or video"
            className="seachInput"
          />
        </div>
      </div>
      <div className="topbarright">
        <div className="topBarLinks">
          <span className="topBarLinks">Homepage</span>
          <span className="topBarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbariconsItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbariconsItems">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbariconsItems">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src={topbarimage} alt="" className="topbarimg" />
      </div>
    </div>
  );
}

export default Topbar;
