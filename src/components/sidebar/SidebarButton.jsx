import React from "react";
import { RiHome7Fill } from "react-icons/ri";

export const SidebarButton = ({ item }) => {
  return (
    <div className="flex items-center gap-2 hover:text-gray-500 cursor-pointer  rounded-full">
      <item.icon size={30} className="hover:text-gray-500" />
      <h1 className="text-lg">
        <b>{item.label}</b>
      </h1>
    </div>
  );
};
