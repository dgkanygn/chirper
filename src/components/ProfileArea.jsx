import React from "react";

import { PostCard } from "./PostCard";
import { Button } from "./Button";
import { PostSwitcher } from "./profile-area/PostSwitcher";
import { PageTitle } from "./PageTitle";
import useModalStore from "../store/useModalStore";

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
      first: true,
    },
    {
      text: "Beğenilen",
      count: 21,
    },
  ];

  const { openModal } = useModalStore();

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-end justify-between z-10 bg-blue-500 px-5 h-56">
          <img
            className="w-36 rounded-full relative top-16"
            src={profile.pic}
            alt=""
          />
          <Button text={"Takip"} sizes={"px-12 py-1.5 relative top-12"} />
        </div>
        <div className="p-4 pt-20">
          <h1>
            <b>{profile.username}</b>
          </h1>
          <p>{profile.bio}</p>
          <div className="flex items-center gap-4">
            <p>
              <span
                className="font-bold cursor-pointer hover:text-gray-500"
                onClick={() => openModal("users")}
              >
                {profile.following}{" "}
              </span>
              Takip
            </p>
            <p>
              <span
                className="font-bold cursor-pointer hover:text-gray-500"
                onClick={() => openModal("users")}
              >
                {profile.followers}{" "}
              </span>
              Takipçi
            </p>
            <p>{profile.cakedate} katıldı</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4 border-t border-b">
        {switcherButtons.map((btn, index) => (
          <PostSwitcher
            // className={!btn.first ? "line" : ""}
            key={index}
            text={btn.text}
            count={btn.count}
          />
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
  );
};
