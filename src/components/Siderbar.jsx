import React from "react";

// icon
import { RiHome7Fill } from "react-icons/ri";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { HiUser } from "react-icons/hi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { SidebarButton } from "./sidebar/SidebarButton";
import { Button } from "./Button";
import { Logo } from "./sidebar/Logo";
import { Link } from "react-router-dom";

export const Siderbar = () => {
  const buttons = [
    {
      label: "Ana Sayfa",
    },
    {
      label: "Profil",
    },
    {
      label: "Kaydedilenler",
    },
  ];

  return (
    <div className="flex flex-col gap-10 w-72 py-5  ">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="flex flex-col gap-6">
        {buttons.map((btn, index) => (
          <SidebarButton key={index} label={btn.label} />
        ))}
      </div>
      <Button text={"Yeni gönderi"} sizes={"p-2.5"} />
    </div>
  );
};
