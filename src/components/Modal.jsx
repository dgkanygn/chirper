import React from "react";
import { CreatePost } from "./popups/CreatePost";
import { Users } from "./popups/Users";
import { Comments } from "./popups/Comments";
import { Login } from "./popups/Login";
import { Register } from "./popups/Register";

export const Modal = () => {
  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto bg-blue-400 bg-opacity-30 flex items-center justify-center p-5 md:p-0">
        <Register />
      </div>
    </div>
  );
};
