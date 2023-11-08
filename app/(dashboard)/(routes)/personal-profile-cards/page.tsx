import React from "react";

import ProfileCard from "@/components/personal-profiles/personal-profile-card";
import { vGuideUserData } from "@/backend-data-test";

/**
 * Renders the personal profile card page.
 *
 * @return {JSX.Element} The rendered personal profile card page.
 */
const PersonalProfileCardPage = () => {
  return (
    <div className="h-screen flex flex-col items-center w-full">
      <ProfileCard
        data={vGuideUserData}
        dataType={"guide"}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        date={vGuideUserData.vUserInfoData.calendar}
      />
    </div>
  );
};

export default PersonalProfileCardPage;
