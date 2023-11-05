import React from "react";

import {
  IconBagDollar,
  IconCalendarEventStar,
  IconCalendarWebinar,
  IconCreateStudioBtn,
  IconDetailsBtn,
  IconMyJobsBtn,
  IconMyProfileBtn,
  IconStore,
  IconUserExpertsBtn,
  IconUsersAuthorBtn,
  IconUsersLancersBtn,
  IconVideo,
} from "@/components/icons/logo-icons";
import Heading from "@/components/nav/heading";
import GuideProfileBanner from "@/components/profile-banners/v-guide/guide-profile";
import {
  partOf,
  vAuthorUserData,
  vBlogUserData,
  vEventsUserData,
  vExpertsUserData,
  vGuideUserData,
  vJobUserData,
  vLanceUserData,
  vMarketUserData,
  vMarketingSponsorUserData,
  vMarketingUserData,
  vTubeUserData,
  vUserInfoData,
  vWebinarsUserData,
} from "@/backend-data-test";
import BannerProfile from "@/components/profile-banners/banner-profile";
import { IconSponsorHandShaking } from "../../../../components/icons/logo-icons";
import BannerProfileDialog from "@/components/profile-banners/banner-profile-dialog";
import GuideProfileBannerDialog from "@/components/profile-banners/v-guide/guide-profile-dialog";

const ProfileBannerPage = () => {
  return (
    <div className="space-y-20">
      <Heading
        title={"Profile Banners"}
        description={"Profile Banners for users."}
        icon={IconMyProfileBtn}
      />

      <GuideProfileBanner
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
        isAgreementVerified={true}
        isEmailVerified={true}
        isIdVerified={true}
        isPhoneVerified={true}
        isOwner={false}
      />
      <GuideProfileBannerDialog
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
        dialogTitle={"Profile Banner V-Guide Full"}
        isAgreementVerified={false}
        isEmailVerified={true}
        isIdVerified={true}
        isPhoneVerified={true}
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
        isOwner={false}
      />
      <Heading
        title={"Event Banners"}
        description={"V-Events Banner for users."}
        icon={IconCalendarEventStar}
      />
      <BannerProfile
        isLoading={false}
        userName={"<Event Name>"}
        userTitle={"Demo Profile Banner V-Events Banner"}
        points={1000}
        endorsements={10000}
        isFeatured={true}
        thumbsup={1000}
        shares={100}
        rank={"vendorGold"}
        dataType={"event"}
        data={vEventsUserData}
        isOwner={false}
      />
      <Heading
        title={"Webinar Banners"}
        description={"V-Webinar Banner for users."}
        icon={IconCalendarWebinar}
      />
      <BannerProfile
        isLoading={false}
        userName={"<Webinar Name>"}
        userTitle={"Demo Profile Banner V-Webinar Banner"}
        points={1000}
        endorsements={10000}
        isFeatured={true}
        thumbsup={1000}
        shares={100}
        rank={"vendorPlatinum"}
        dataType={"webinar"}
        data={vWebinarsUserData}
        isOwner={false}
      />
      <Heading
        title={"Experts Banners"}
        description={"V-Experts Banner for users."}
        icon={IconUserExpertsBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={"<Experts Name>"}
        userTitle={"Demo Profile Banner V-Experts Banner"}
        points={1000}
        endorsements={10000}
        isFeatured={true}
        thumbsup={1000}
        shares={100}
        rank={"vendorSilver"}
        dataType={"webinar"}
        data={vExpertsUserData}
        isOwner={false}
      />
      <Heading
        title={"Marketing Sponsors Banners"}
        description={"V-Market Sponsor Banner for users."}
        icon={IconStore}
      />
      <BannerProfile
        isLoading={false}
        userName={"<Market User Name>"}
        userTitle={"Demo Profile Banner V-Market Sponsor Banner"}
        points={1000}
        endorsements={10000}
        isFeatured={true}
        thumbsup={1000}
        shares={100}
        rank={"standardSilver"}
        dataType={"marketingSponsor"}
        data={vMarketingSponsorUserData}
        isOwner={false}
      />
      <Heading
        title={"Marketing Banners"}
        description={"V-Marketing Banner for users."}
        icon={IconSponsorHandShaking}
      />
      <BannerProfile
        isLoading={false}
        userName={"<Market User Name>"}
        userTitle={"Demo Profile Banner V-Marketing Banner"}
        points={1000}
        endorsements={10000}
        isFeatured={true}
        thumbsup={1000}
        shares={100}
        rank={"standardPlatinum"}
        dataType={"marketing"}
        data={vMarketingUserData}
        isOwner={true}
      />
      <Heading
        title={"Market Banners"}
        description={"V-Market Banner for users."}
        icon={IconBagDollar}
      />
      <BannerProfile
        isLoading={false}
        userName={"<Market User Name>"}
        userTitle={"Demo Profile Banner V-Market Banner"}
        points={1000}
        endorsements={10000}
        isFeatured={true}
        thumbsup={1000}
        shares={100}
        rank={"standardPlatinum"}
        dataType={"market"}
        data={vMarketUserData}
        isOwner={true}
      />
      <Heading
        title={"Dialog Profile Banners"}
        description={"V-Verse Dialog Banners for users, info button icon."}
        icon={IconDetailsBtn}
      />
      <BannerProfileDialog
        userName={"Dialog Test User"}
        userTitle={"Dialog test, test with most banners."}
        isLoading={false}
        points={10000}
        endorsements={10000}
        isFeatured={true}
        isOpenToWork={true}
        thumbsup={100000}
        shares={100000}
        rank={"standardGold"}
        data={vTubeUserData}
        dialogTitle={"V-Tube Test Banner Dialog"}
        dataType={"tube"}
      />
    </div>
  );
};

export default ProfileBannerPage;
