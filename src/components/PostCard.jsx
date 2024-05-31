import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useModalStore from "../store/useModalStore";

export const PostCard = ({ pic, username, date, post, like, comment }) => {
  const { openModal } = useModalStore();

  return (
    <div>
      <div className="flex items-start gap-4 border-b border-1 px-3 py-4">
        <Link to={"/profile"}>
          <img className="w-16 rounded-full" src={pic} alt="" />
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Link to={"/profile"}>
              <h1 className="hover:text-gray-500">
                <b>{username}</b>
              </h1>
            </Link>
            <h1>{date}</h1>
          </div>
          <p>{post}</p>
          <div className="flex items-center gap-2">
            {/* tepki tuşu 1 */}
            <div className="flex items-center gap-2 hover:bg-blue-100 cursor-pointer py-1.5 px-3 rounded-full">
              <FaRegHeart />
              <h1>{like}</h1>
            </div>
            {/* tepki tuşu 2 */}
            <div
              onClick={() => openModal("comments")}
              className="flex items-center gap-2 hover:bg-blue-100 cursor-pointer py-1.5 px-3 rounded-full"
            >
              <FaRegComment />
              <h1>{comment}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
