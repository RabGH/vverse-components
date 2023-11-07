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
  vWebinarsUserData,
} from "@/backend-data-test";
import BannerProfile from "@/components/profile-banners/banner-profile";
import { IconSponsorHandShaking } from "../../../../components/icons/logo-icons";
import BannerProfileDialog from "@/components/profile-banners/banner-profile-dialog";
import GuideProfileBannerDialog from "@/components/profile-banners/v-guide/guide-profile-dialog";

/**
 * Renders the profile banner page.
 *
 * @return {JSX.Element} The JSX element representing the profile banner page.
 */
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
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        rank={vGuideUserData.rank}
        currency={vGuideUserData.currency}
        points={vGuideUserData.points}
        endorsements={vGuideUserData.endorsements}
        isFeatured={vGuideUserData.isFeatured}
        likes={vGuideUserData.likes}
        shares={vGuideUserData.shares}
        guideUserData={vGuideUserData}
        userInfoData={vGuideUserData.vUserInfoData}
        profileType={vGuideUserData.profileType}
        partOf={partOf}
        isEmailVerified={vGuideUserData.isEmailVerified}
        isPhoneVerified={vGuideUserData.isPhoneVerified}
        isAgreementVerified={vGuideUserData.isAgreementVerified}
        isIdVerified={vGuideUserData.isIdVerified}
      />
      <GuideProfileBannerDialog
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        rank={vGuideUserData.rank}
        currency={vGuideUserData.currency}
        points={vGuideUserData.points}
        endorsements={vGuideUserData.endorsements}
        isFeatured={vGuideUserData.isFeatured}
        likes={vGuideUserData.likes}
        shares={vGuideUserData.shares}
        guideUserData={vGuideUserData}
        userInfoData={vGuideUserData.vUserInfoData}
        profileType={vGuideUserData.profileType}
        partOf={partOf}
        isEmailVerified={vGuideUserData.isEmailVerified}
        isPhoneVerified={vGuideUserData.isPhoneVerified}
        isAgreementVerified={vGuideUserData.isAgreementVerified}
        isIdVerified={vGuideUserData.isIdVerified}
        dialogTitle={"Dialog Title Test"}
      />
      <Heading
        title={"Blog Banners"}
        description={"Blog Banner for users."}
        icon={IconCreateStudioBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vBlogUserData.userName}
        userTitle={vBlogUserData.userTitle}
        points={vBlogUserData.points}
        endorsements={vBlogUserData.endorsements}
        isFeatured={vBlogUserData.isFeatured}
        likes={vBlogUserData.likes}
        shares={vBlogUserData.shares}
        rank={vBlogUserData.rank}
        dataType={vBlogUserData.dataType}
        data={vBlogUserData}
      />
      <Heading
        title={"V-Author Banners"}
        description={"V-Author Banner for users."}
        icon={IconUsersAuthorBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vAuthorUserData.userName}
        userTitle={vAuthorUserData.userTitle}
        points={vAuthorUserData.points}
        endorsements={vAuthorUserData.endorsements}
        isFeatured={vAuthorUserData.isFeatured}
        likes={vAuthorUserData.likes}
        shares={vAuthorUserData.shares}
        rank={vAuthorUserData.rank}
        dataType={vAuthorUserData.dataType}
        data={vAuthorUserData}
      />
      <Heading
        title={"V-Tube Banners"}
        description={"V-Tube Banner for users."}
        icon={IconVideo}
      />
      <BannerProfile
        isLoading={false}
        userName={vTubeUserData.userName}
        userTitle={vTubeUserData.userTitle}
        points={vTubeUserData.points}
        endorsements={vTubeUserData.endorsements}
        isFeatured={vTubeUserData.isFeatured}
        likes={vTubeUserData.likes}
        shares={vTubeUserData.shares}
        rank={vTubeUserData.rank}
        dataType={vTubeUserData.dataType}
        data={vTubeUserData}
      />
      <Heading
        title={"Job Candidate Banners"}
        description={"V-Job Banner for users."}
        icon={IconMyJobsBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vJobUserData.userName}
        userTitle={vJobUserData.userTitle}
        points={vJobUserData.points}
        endorsements={vJobUserData.endorsements}
        isFeatured={vJobUserData.isFeatured}
        likes={vJobUserData.likes}
        shares={vJobUserData.shares}
        rank={vJobUserData.rank}
        dataType={vJobUserData.dataType}
        data={vJobUserData}
        isOpenToWork={vJobUserData.isOpenToWork}
      />
      <Heading
        title={"Lancer Banners"}
        description={"V-Lance Banner for users."}
        icon={IconUsersLancersBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vLanceUserData.userName}
        userTitle={vLanceUserData.userTitle}
        points={vLanceUserData.points}
        endorsements={vLanceUserData.endorsements}
        isFeatured={vLanceUserData.isFeatured}
        likes={vLanceUserData.likes}
        shares={vLanceUserData.shares}
        rank={vLanceUserData.rank}
        dataType={vLanceUserData.dataType}
        data={vLanceUserData}
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
        isFeatured="featured"
        likes={1000}
        shares={100}
        rank={"vendorGold"}
        dataType={"event"}
        data={vEventsUserData}
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
        isFeatured="featured"
        likes={1000}
        shares={100}
        rank={"vendorPlatinum"}
        dataType={"webinar"}
        data={vWebinarsUserData}
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
        isFeatured="featured"
        likes={1000}
        shares={100}
        rank={"vendorSilver"}
        dataType={"webinar"}
        data={vExpertsUserData}
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
        isFeatured="featured"
        likes={1000}
        shares={100}
        rank={"standardSilver"}
        dataType={"marketingSponsor"}
        data={vMarketingSponsorUserData}
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
        isFeatured="featured"
        likes={1000}
        shares={100}
        rank={"standardPlatinum"}
        dataType={"marketing"}
        data={vMarketingUserData}
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
        isFeatured="featured"
        likes={1000}
        shares={100}
        rank={"standardPlatinum"}
        dataType={"market"}
        data={vMarketUserData}
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
        isFeatured="featured"
        isOpenToWork={""}
        likes={100000}
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
