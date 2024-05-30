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

import { LuLogOut } from "react-icons/lu";
import { ProfileCard } from "./sidebar/ProfileCard";

export const Siderbar = () => {
  const buttons = [
    {
      label: "Ana Sayfa",
      icon: RiHome7Fill,
      path: "/",
    },
    {
      label: "Profil",
      icon: HiUser,
      path: "/profile",
    },
    {
      label: "Kaydedilenler",
      icon: PiBookmarkSimpleFill,
      path: "/",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col justify-between w-1/3 py-5 sticky top-0 h-screen border-r px-6">
      <div className="space-y-10">
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            {buttons.map((item, index) => (
              <Link to={item.path}>
                <SidebarButton item={item} key={index} />
              </Link>
            ))}
          </div>
          <Button text={"Yeni gönderi"} sizes={"p-2.5 mt-4"} />
        </div>
      </div>
      <div>
        <ProfileCard />
      </div>
    </div>
  );
};
