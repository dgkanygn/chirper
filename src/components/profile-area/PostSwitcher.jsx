import React from "react";

export const PostSwitcher = ({ count, text }) => {
  return (
    <div className="p-5 hover:bg-gray-200 cursor-pointer w-full text-center">
      {count + " " + text}
    </div>
  );
};
