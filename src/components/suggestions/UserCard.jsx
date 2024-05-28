import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const UserCard = ({ username, pic }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4">
        <Link to={"/profile"}>
          <img className="w-10 rounded-full" src={pic} alt="" />
        </Link>

        <Link to={"/profile"}>
          <h1 className="hover:text-gray-500">
            <b>{username}</b>
          </h1>
        </Link>
      </div>
      <Button text={"Takip et"} sizes={"px-4 py-1 text-sm"} />
    </div>
  );
};
