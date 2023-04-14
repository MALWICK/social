import React from "react";
import "../Post/post.css";
/* import postpf from "../../Assets/persons/1 (1).jpeg"; */
import like from "../../Assets/like.png";
import heart from "../../Assets/heart.png";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

function Post({ post }) {
  const user = Users.filter((u) => u.id === 1);
  console.log(user);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="post"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={like} alt="like emoji" />
            <img className="likeIcon" src={heart} alt="like emoji" />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
