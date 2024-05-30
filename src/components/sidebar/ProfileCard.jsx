import React from "react";
import { LuLogOut } from "react-icons/lu";

export const ProfileCard = () => {
  return (
    <div className="flex items-center justify-between  p-4 border border-1 border-solid">
      <div className="flex items-center gap-2">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
          className="w-10 rounded-full"
        />
        <h1>
          <b>user1</b>
        </h1>
      </div>
      <div className="bg-blue-500 p-2 rounded cursor-pointer text-white">
        <LuLogOut />
      </div>
    </div>
  );
};
