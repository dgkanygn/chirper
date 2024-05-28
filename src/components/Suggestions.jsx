import React from "react";
import { UserCard } from "./suggestions/UserCard";

export const Suggestions = () => {
  const users = [
    {
      username: "user1",
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    {
      username: "user1",
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    {
      username: "user1",
      pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  ];

  return (
    <div className="  w-96">
      <div className="flex flex-col gap-6">
        {users.map((user, index) => (
          <UserCard key={index} username={user.username} pic={user.pic} />
        ))}
      </div>
    </div>
  );
};
