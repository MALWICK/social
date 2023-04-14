import React from 'react'
import "../online/online.css"

function Oline({user}) {
  return (
    <div>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src={user.profilePicture} alt="" /> 
              <span className="rightbarOnline"></span>
            </div>
            <span className="rigthbarUsername">{user.username}</span>
          </li>
    </div>
  )
}

export default Oline