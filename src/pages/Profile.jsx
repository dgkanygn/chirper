import { useState } from "react";

import { Siderbar } from "../components/Siderbar";
import { Suggestions } from "../components/Suggestions";
import { ProfileArea } from "../components/ProfileArea";

function Profile() {
  return (
    <div className="container mx-auto max-w-[1300px] md:px-2 md:py-5">
      <div className="flex gap-6">
        <Siderbar />
        <ProfileArea />
        <Suggestions />
      </div>
    </div>
  );
}

export default Profile;
