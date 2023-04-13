import React from "react";
import "../Post/post.css";
import postpf from "../../Assets/persons/1 (1).jpeg";
import post1 from "../../Assets/post/1.jpeg";
import like from "../../Assets/like.png";
import heart from "../../Assets/heart.png";
import { MoreVert } from "@material-ui/icons";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={postpf} alt="post" />
            <span className="postUsername">Humphrey</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first Post :)</span>
          <img className="postImg" src={post1} alt="firstpost" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={like} alt="like emoji" />
            <img className="likeIcon" src={heart} alt="like emoji" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
