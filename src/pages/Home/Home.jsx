import React from 'react'
import "../Home/Home.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sideBar/Sidebar'
import Rightbar from '../../components/rightBar/Rightbar';
import Feed from '../../components/feed/Feed';

function Home() {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
      </div>
   
    </div>
  )
}

export default Home