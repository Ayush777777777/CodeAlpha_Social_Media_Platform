import React, { useState } from "react";
import Post from "./Post/Post";
// import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">

      <div className="timeline__left">
        <nav className="flex items-center justify-center bg-black p-6 shadow-md">
          <div className="flex items-center">
            <input className="text-black focus:outline-none focus:shadow-outline border border-gray-400 rounded py-1 px-4 block leading-normal w-64" type="text" placeholder="Search" />

          </div>
          <div>
            <i className="far fa-user text-lg cursor-pointer"></i>
          </div>
        </nav>
        {posts.map((post) => (
          <Post
            user={post.user}
            postImage={post.postImage}
            likes={post.likes}
            timestamp={post.timestamp}
          />
        ))}

      </div>
    </div>
  );
}

export default Timeline;
