import React from "react";

import {
  IconCreateStudioBtn,
  IconMyJobsBtn,
  IconMyProfileBtn,
  IconUsersAuthorBtn,
  IconUsersLancersBtn,
  IconVideo,
} from "@/components/icons/logo-icons";
import Heading from "@/components/nav/heading";
import UserProfileBanner from "@/components/profile-banners/v-guide/user-profile-banner";
import BlogProfile from "@/components/profile-banners/v-blog/blog-profile";
import AuthorProfile from "@/components/profile-banners/v-author/author-profile";
import TubeProfile from "@/components/profile-banners/v-tube/tube-profile";
import JobProfile from "@/components/profile-banners/v-jobs/job-profile";
import LanceProfile from "@/components/profile-banners/v-lance/lance-profile";

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
          icon={IconUsersAuthorBtn}
        />
        <AuthorProfile isLoading={false} />
        <Heading
          title={"V-Tube Banners"}
          description={"V-Tube Banner for users."}
          icon={IconVideo}
        />
        <TubeProfile isLoading={false} />
        <Heading
          title={"Job Candidate Banners"}
          description={"V-Job Banner for users."}
          icon={IconMyJobsBtn}
        />
        <JobProfile isLoading={false} />
        <Heading
          title={"Lancer Banners"}
          description={"V-Lance Banner for users."}
          icon={IconUsersLancersBtn}
        />
        <LanceProfile isLoading={false} />
      </div>
    </div>
  );
};

export default ProfileBannerPage;
