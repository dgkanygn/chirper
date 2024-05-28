import React from "react";

import { PostCard } from "./PostCard";
import { Button } from "./Button";
import { PostSwitcher } from "./profile-area/PostSwitcher";
import { PageTitle } from "./PageTitle";

export const ProfileArea = () => {
  const posts = [
    {
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      username: "user1",
      date: "3dk",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique voluptatum blanditiis nihil tempore labore, inventore odio eaque eligendi nisi.",
      like: 5,
      comment: 11,
    },
    {
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      username: "user1",
      date: "3dk",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique voluptatum blanditiis nihil tempore labore, inventore odio eaque eligendi nisi.",
      like: 5,
      comment: 11,
    },
    {
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      username: "user1",
      date: "3dk",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique voluptatum blanditiis nihil tempore labore, inventore odio eaque eligendi nisi.",
      like: 5,
      comment: 11,
    },
    {
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      username: "user1",
      date: "3dk",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique voluptatum blanditiis nihil tempore labore, inventore odio eaque eligendi nisi.",
      like: 5,
      comment: 11,
    },
    {
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      username: "user1",
      date: "3dk",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique voluptatum blanditiis nihil tempore labore, inventore odio eaque eligendi nisi.",
      like: 5,
      comment: 11,
    },
    {
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      username: "user1",
      date: "3dk",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique voluptatum blanditiis nihil tempore labore, inventore odio eaque eligendi nisi.",
      like: 5,
      comment: 11,
    },
    {
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      username: "user1",
      date: "3dk",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique voluptatum blanditiis nihil tempore labore, inventore odio eaque eligendi nisi.",
      like: 5,
      comment: 11,
    },
  ];

  const profile = {
    pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    username: "user1",
    bio: "Lorem ipsum dolor sit amet.",
    following: 124,
    followers: 246,
    cakedate: "Ocak 2024'te",
    // post: 14,
    // liked: 21,
  };

  const switcherButtons = [
    {
      text: "Gönderi",
      count: 14,
    },
    {
      text: "Beğenilen",
      count: 21,
    },
  ];

  return (
    <div>
      <div className="flex flex-col w-[600px]">
        <PageTitle title={"Profile"} />
        <div className="bg-blue-500 py-28 relative"></div>
        <div>
          <div className="z-10">
            <div className="flex items-center justify-between z-10">
              <img className="w-36 rounded-full" src={profile.pic} alt="" />
              <Button text={"Takip"} sizes={"px-12 py-1.5 "} />
            </div>
          </div>
          <div>
            <h1>
              <b>{profile.username}</b>
            </h1>
            <p>{profile.bio}</p>
            <div className="flex items-center gap-4">
              <p>{profile.following} Takip</p>
              <p>{profile.followers} Takipçi</p>
              <p>{profile.cakedate} katıldı</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              {switcherButtons.map((btn, index) => (
                <PostSwitcher key={index} text={btn.text} count={btn.count} />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {posts.map((post, index) => (
                <PostCard
                  key={index}
                  pic={post.pic}
                  username={post.username}
                  date={post.date}
                  post={post.post}
                  like={post.like}
                  comment={post.comment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
