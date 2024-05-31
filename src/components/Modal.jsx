import React from "react";
import { CreatePost } from "./popups/CreatePost";
import { Users } from "./popups/Users";
import { Comments } from "./popups/Comments";
import { Login } from "./popups/Login";
import { Register } from "./popups/Register";
import useModalStore from "../store/useModalStore";

export const Modal = () => {
  const modals = [
    {
      name: "create",
      element: <CreatePost />,
    },
    {
      name: "comments",
      element: <Comments />,
    },
    {
      name: "login",
      element: <Login />,
    },
    {
      name: "register",
      element: <Register />,
    },
    {
      name: "users",
      element: <Users />,
    },
  ];

  const { isOpen, modalName } = useModalStore();
  // const modalName = "create";
  let modalElement = "";

  modals.forEach((item) => {
    if (item.name === modalName) {
      modalElement = item.element;
    }
  });

  return (
    <div>
      <div className="fixed z-20 inset-0 overflow-y-auto bg-blue-400 bg-opacity-30 flex items-center justify-center p-5 md:p-0">
        {modalElement}
      </div>
    </div>
  );
};
