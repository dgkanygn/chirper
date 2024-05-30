import { useState } from "react";

// icon
import { RiHome7Fill } from "react-icons/ri";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { HiUser } from "react-icons/hi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Siderbar } from "../components/Siderbar";
import { Timeline } from "../components/Timeline";
import { Suggestions } from "../components/Suggestions";
import { PageTitle } from "../components/PageTitle";

function Home() {
  return (
    <div className="container mx-auto max-w-[1300px] flex">
      {/* <div className=" "> */}
      <Siderbar />
      <div className="w-[1200px]">
        <PageTitle title={"Ana Sayfa"} />
        <Timeline />
      </div>
      <Suggestions />
      {/* </div> */}
    </div>
  );
}

export default Home;
