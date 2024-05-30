import { useState } from "react";

import { Siderbar } from "../components/Siderbar";
import { Suggestions } from "../components/Suggestions";
import { ProfileArea } from "../components/ProfileArea";
import { PageTitle } from "../components/PageTitle";

function Profile() {
  return (
    <div className="container mx-auto max-w-[1300px] flex">
      {/* <div className=""> */}
      <Siderbar />
      <div className="w-[1200px]">
        <PageTitle title={"Profile"} />
        <ProfileArea />
      </div>
      <Suggestions />
      {/* </div> */}
    </div>
  );
}

export default Profile;
