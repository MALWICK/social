import React from 'react'
import "../closedFriend/closedFriend.css"

function CLosedFriend({user}) {
  return (
    <div>
     <li className="sidebarFriend">
         <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
    </div>
  )
}

export default CLosedFriend