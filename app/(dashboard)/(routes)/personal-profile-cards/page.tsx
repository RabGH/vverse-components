import React from "react";

import ProfileCard from "@/components/personal-profiles/personal-profile-card";

/**
 * Renders the personal profile card page.
 *
 * @return {JSX.Element} The rendered personal profile card page.
 */
const PersonalProfileCardPage = () => {
  return (
    <div className="h-screen flex flex-col items-center w-full">
      <ProfileCard />
    </div>
  );
};

export default PersonalProfileCardPage;
