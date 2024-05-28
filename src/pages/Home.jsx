import { useState } from "react";

// icon
import { RiHome7Fill } from "react-icons/ri";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { HiUser } from "react-icons/hi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Siderbar } from "../components/Siderbar";
import { Timeline } from "../components/Timeline";
import { Suggestions } from "../components/Suggestions";

function Home() {
  return (
    <div className="container mx-auto max-w-[1300px] md:px-2 md:py-5">
      <div className="flex gap-10 ">
        <Siderbar />
        <Timeline />
        <Suggestions />
      </div>
    </div>
  );
}

export default Home;
