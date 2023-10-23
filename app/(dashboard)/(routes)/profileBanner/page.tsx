import React from "react";

import {
  IconCreateStudioBtn,
  IconMyProfileBtn,
} from "@/components/icons/logo-icons";
import Heading from "@/components/nav/heading";
import UserProfileBanner from "@/components/profile-banners/v-guide/user-profile-banner";
import BlogProfile from "@/components/profile-banners/v-blog/blog-profile";

const ProfileBannerPage = () => {
  return (
    <div>
      <Heading
        title={"Profile Banners"}
        description={"Profile Banners for users."}
        icon={IconMyProfileBtn}
      />
      <div className="space-y-20">
        <UserProfileBanner isLoading={false} />
        <Heading
          title={"Blog Banners"}
          description={"Blog Banner for users."}
          icon={IconCreateStudioBtn}
        />
        <BlogProfile isLoading={false} />
      </div>
    </div>
  );
};

export default ProfileBannerPage;
