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
import UserProfileBanner from "@/components/profile-banners/v-guide/guide-profile";
import {
  partOf,
  vAuthorUserData,
  vBlogUserData,
  vGuideUserData,
  vJobUserData,
  vLanceUserData,
  vMarketUserData,
  vTubeUserData,
  vUserInfoData,
} from "@/backend-data-test";
import BannerProfile from "@/components/profile-banners/banner-profile";

const ProfileBannerPage = () => {
  return (
    <div>
      <Heading
        title={"Profile Banners"}
        description={"Profile Banners for users."}
        icon={IconMyProfileBtn}
      />
      <div className="space-y-20">
        <UserProfileBanner
          isLoading={false}
          userName={"<Guide Name>"}
          userTitle={"Demo Profile Banner V-Guide Banner"}
          rank={"standardSilver"}
          currency={"$"}
          points={1000}
          endorsements={10000}
          isFeatured={true}
          thumbsup={10000}
          shares={10000}
          partOf={partOf}
          guideUserData={vGuideUserData}
          userInfoData={vUserInfoData}
        />
        <Heading
          title={"Blog Banners"}
          description={"Blog Banner for users."}
          icon={IconCreateStudioBtn}
        />
        <BannerProfile
          isLoading={false}
          userName={"<Blog Name>"}
          userTitle={"Demo Profile Banner V-Blog Banner"}
          points={1000}
          endorsements={10000}
          isFeatured={true}
          thumbsup={1000}
          shares={100}
          rank={"standardPlatinum"}
          dataType={"blog"}
          data={vBlogUserData}
        />
        <Heading
          title={"V-Author Banners"}
          description={"V-Author Banner for users."}
          icon={IconUsersAuthorBtn}
        />
        <BannerProfile
          isLoading={false}
          userName={"<Author Name>"}
          userTitle={"Demo Profile Banner V-Author Banner"}
          points={1000}
          endorsements={10000}
          isFeatured={true}
          thumbsup={1000}
          shares={100}
          rank={"standardGold"}
          dataType={"author"}
          data={vAuthorUserData}
        />
        <Heading
          title={"V-Tube Banners"}
          description={"V-Tube Banner for users."}
          icon={IconVideo}
        />
        <BannerProfile
          isLoading={false}
          userName={"<Tube Name>"}
          userTitle={"Demo Profile Banner V-Tube Banner"}
          points={1000}
          endorsements={10000}
          isFeatured={true}
          thumbsup={1000}
          shares={100}
          rank={"ambassadorSilver"}
          dataType={"tube"}
          data={vTubeUserData}
        />
        <Heading
          title={"Job Candidate Banners"}
          description={"V-Job Banner for users."}
          icon={IconMyJobsBtn}
        />
        <BannerProfile
          isLoading={false}
          userName={"<Job Name>"}
          userTitle={"Demo Profile Banner V-Job Banner"}
          points={1000}
          endorsements={10000}
          isFeatured={true}
          thumbsup={1000}
          shares={100}
          rank={"ambassadorGold"}
          dataType={"jobs"}
          data={vJobUserData}
          isOpenToWork={true}
        />
        <Heading
          title={"Lancer Banners"}
          description={"V-Lance Banner for users."}
          icon={IconUsersLancersBtn}
        />
        <BannerProfile
          isLoading={false}
          userName={"<Lance Name>"}
          userTitle={"Demo Profile Banner V-Lance Banner"}
          points={1000}
          endorsements={10000}
          isFeatured={true}
          thumbsup={1000}
          shares={100}
          rank={"vendorSilver"}
          dataType={"lance"}
          data={vLanceUserData}
          isOwner={true}
        />
      </div>
    </div>
  );
};

export default ProfileBannerPage;
