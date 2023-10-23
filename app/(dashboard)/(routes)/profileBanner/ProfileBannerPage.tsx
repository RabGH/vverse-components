import React from "react";
import { IconMyProfileBtn } from "@/components/icons/logo-icons";
import Heading from "@/components/nav/heading";
import UserProfileBanner from "@/components/profile-banners/v-guide/user-profile-banner";

export const ProfileBannerPage = () => {
  return (
    <div>
      <Heading
        title={"Profile Banners"}
        description={"Profile Banners for users."}
        icon={IconMyProfileBtn}
      />
      <UserProfileBanner />
    </div>
  );
};
