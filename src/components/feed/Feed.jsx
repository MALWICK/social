import React from 'react'
import "../feed/feed.css"
import Share from '../share/Share'
import Post from '../Post/Post'

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed