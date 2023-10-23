import React from "react";

import {
  IconCreateStudioBtn,
  IconMyProfileBtn,
} from "@/components/icons/logo-icons";
import Heading from "@/components/nav/heading";
import UserProfileBanner from "@/components/profile-banners/v-guide/user-profile-banner";
import BlogProfile from "@/components/profile-banners/v-blog/blog-profile";
import AuthorProfile from "@/components/profile-banners/v-author/author-profile";
import TubeProfile from "@/components/profile-banners/v-tube/tube-profile";

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
        <Heading
          title={"V-Nation Author Banners"}
          description={"V-Nation Banner for users."}
          icon={IconCreateStudioBtn}
        />
        <AuthorProfile isLoading={false} />
        <Heading
          title={"V-Tube Banners"}
          description={"V-tube Banner for users."}
          icon={IconCreateStudioBtn}
        />
        <TubeProfile isLoading={false} />
      </div>
    </div>
  );
};

export default ProfileBannerPage;
