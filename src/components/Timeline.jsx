import React from "react";

// icon
import { RiHome7Fill } from "react-icons/ri";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { HiUser } from "react-icons/hi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Siderbar } from "../components/Siderbar";
import { PostCard } from "./PostCard";
import { PageTitle } from "./PageTitle";

export const Timeline = () => {
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

  return (
    <div>
      <div className="flex flex-col gap-5 ">
        <PageTitle title={"Ana Sayfa"} />
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
