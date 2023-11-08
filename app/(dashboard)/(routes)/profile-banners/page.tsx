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
import { vGuideUserData } from "@/backend-data-test";
import BannerProfile from "@/components/profile-banners/banner-profile";
import { IconSponsorHandShaking } from "../../../../components/icons/logo-icons";
import BannerProfileDialog from "@/components/profile-banners/banner-profile-dialog";
import GuideProfileBannerDialog from "@/components/profile-banners/v-guide/guide-profile-dialog";

/**
 * Renders the Profile Banner page.
 *
 * @return {JSX.Element} The rendered Profile Banner page.
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
        partOf={vGuideUserData.partOf}
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
        partOf={vGuideUserData.partOf}
        isEmailVerified={vGuideUserData.isEmailVerified}
        isPhoneVerified={vGuideUserData.isPhoneVerified}
        isAgreementVerified={vGuideUserData.isAgreementVerified}
        isIdVerified={vGuideUserData.isIdVerified}
        dialogTitle={vGuideUserData.userTitle}
      />
      <Heading
        title={"Blog Banners"}
        description={"Blog Banner for users."}
        icon={IconCreateStudioBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.vBlogUserData.points}
        endorsements={vGuideUserData.vBlogUserData.endorsements}
        isFeatured={vGuideUserData.vBlogUserData.isFeatured}
        likes={vGuideUserData.vBlogUserData.likes}
        shares={vGuideUserData.vBlogUserData.shares}
        rank={vGuideUserData.vBlogUserData.rank}
        dataType={vGuideUserData.vBlogUserData.dataType}
        data={vGuideUserData.vBlogUserData}
      />
      <Heading
        title={"V-Author Banners"}
        description={"V-Author Banner for users."}
        icon={IconUsersAuthorBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.vAuthorUserData.points}
        endorsements={vGuideUserData.vAuthorUserData.endorsements}
        isFeatured={vGuideUserData.vAuthorUserData.isFeatured}
        likes={vGuideUserData.vAuthorUserData.likes}
        shares={vGuideUserData.vAuthorUserData.shares}
        rank={vGuideUserData.vAuthorUserData.rank}
        dataType={vGuideUserData.vAuthorUserData.dataType}
        data={vGuideUserData.vAuthorUserData}
      />
      <Heading
        title={"V-Tube Banners"}
        description={"V-Tube Banner for users."}
        icon={IconVideo}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.vTubeUserData.points}
        endorsements={vGuideUserData.vTubeUserData.endorsements}
        isFeatured={vGuideUserData.vTubeUserData.isFeatured}
        likes={vGuideUserData.vTubeUserData.likes}
        shares={vGuideUserData.vTubeUserData.shares}
        rank={vGuideUserData.vTubeUserData.rank}
        dataType={vGuideUserData.vTubeUserData.dataType}
        data={vGuideUserData.vTubeUserData}
      />
      <Heading
        title={"Job Candidate Banners"}
        description={"V-Job Banner for users."}
        icon={IconMyJobsBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.vJobUserData.points}
        endorsements={vGuideUserData.vJobUserData.endorsements}
        isFeatured={vGuideUserData.vJobUserData.isFeatured}
        likes={vGuideUserData.vJobUserData.likes}
        shares={vGuideUserData.vJobUserData.shares}
        rank={vGuideUserData.vJobUserData.rank}
        dataType={vGuideUserData.vJobUserData.dataType}
        data={vGuideUserData.vJobUserData}
        isOpenToWork={vGuideUserData.vJobUserData.isOpenToWork}
      />
      <Heading
        title={"Lancer Banners"}
        description={"V-Lance Banner for users."}
        icon={IconUsersLancersBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.vLanceUserData.points}
        endorsements={vGuideUserData.vLanceUserData.endorsements}
        isFeatured={vGuideUserData.vLanceUserData.isFeatured}
        likes={vGuideUserData.vLanceUserData.likes}
        shares={vGuideUserData.vLanceUserData.shares}
        rank={vGuideUserData.vLanceUserData.rank}
        dataType={vGuideUserData.vLanceUserData.dataType}
        data={vGuideUserData.vLanceUserData}
      />
      <Heading
        title={"Event Banners"}
        description={"V-Events Banner for users."}
        icon={IconCalendarEventStar}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.points}
        endorsements={vGuideUserData.endorsements}
        isFeatured={vGuideUserData.vEventsUserData.isFeatured}
        likes={vGuideUserData.vEventsUserData.likes}
        shares={vGuideUserData.vEventsUserData.shares}
        rank={vGuideUserData.vEventsUserData.rank}
        dataType={vGuideUserData.vEventsUserData.dataType}
        data={vGuideUserData.vEventsUserData}
      />
      <Heading
        title={"Webinar Banners"}
        description={"V-Webinar Banner for users."}
        icon={IconCalendarWebinar}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.points}
        endorsements={vGuideUserData.endorsements}
        isFeatured={vGuideUserData.vWebinarUserData.isFeatured}
        likes={vGuideUserData.vWebinarUserData.likes}
        shares={vGuideUserData.vWebinarUserData.shares}
        rank={vGuideUserData.vWebinarUserData.rank}
        dataType={vGuideUserData.vWebinarUserData.dataType}
        data={vGuideUserData.vWebinarUserData}
      />
      <Heading
        title={"Experts Banners"}
        description={"V-Experts Banner for users."}
        icon={IconUserExpertsBtn}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.points}
        endorsements={vGuideUserData.endorsements}
        isFeatured={vGuideUserData.vExpertsUserData.isFeatured}
        likes={vGuideUserData.vExpertsUserData.likes}
        shares={vGuideUserData.vExpertsUserData.shares}
        rank={vGuideUserData.vExpertsUserData.rank}
        dataType={vGuideUserData.vExpertsUserData.dataType}
        data={vGuideUserData.vExpertsUserData}
      />
      <Heading
        title={"Marketing Sponsors Banners"}
        description={"V-Market Sponsor Banner for users."}
        icon={IconStore}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.points}
        endorsements={vGuideUserData.endorsements}
        isFeatured={vGuideUserData.vMarketingSponsorUserData.isFeatured}
        likes={vGuideUserData.vMarketingSponsorUserData.likes}
        shares={vGuideUserData.vMarketingSponsorUserData.shares}
        rank={vGuideUserData.vMarketingSponsorUserData.rank}
        dataType={vGuideUserData.vMarketingSponsorUserData.dataType}
        data={vGuideUserData.vMarketingSponsorUserData}
      />
      <Heading
        title={"Marketing Banners"}
        description={"V-Marketing Banner for users."}
        icon={IconSponsorHandShaking}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.points}
        endorsements={vGuideUserData.endorsements}
        isFeatured={vGuideUserData.vMarketingUserData.isFeatured}
        likes={vGuideUserData.vMarketingUserData.likes}
        shares={vGuideUserData.vMarketingUserData.shares}
        rank={vGuideUserData.vMarketingUserData.rank}
        dataType={vGuideUserData.vMarketingUserData.dataType}
        data={vGuideUserData.vMarketingUserData}
      />
      <Heading
        title={"Market Banners"}
        description={"V-Market Banner for users."}
        icon={IconBagDollar}
      />
      <BannerProfile
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.points}
        endorsements={vGuideUserData.endorsements}
        isFeatured={vGuideUserData.vMarketUserData.isFeatured}
        likes={vGuideUserData.vMarketUserData.likes}
        shares={vGuideUserData.vMarketUserData.shares}
        rank={vGuideUserData.vMarketUserData.rank}
        dataType={vGuideUserData.vMarketUserData.dataType}
        data={vGuideUserData.vMarketUserData}
      />
      <Heading
        title={"Dialog Profile Banners"}
        description={"V-Verse Dialog Banners for users, info button icon."}
        icon={IconDetailsBtn}
      />
      <BannerProfileDialog
        isLoading={false}
        userName={vGuideUserData.userName}
        userTitle={vGuideUserData.userTitle}
        points={vGuideUserData.vTubeUserData.points}
        endorsements={vGuideUserData.vTubeUserData.endorsements}
        isFeatured={vGuideUserData.vTubeUserData.isFeatured}
        likes={vGuideUserData.vTubeUserData.likes}
        shares={vGuideUserData.vTubeUserData.shares}
        rank={vGuideUserData.vTubeUserData.rank}
        dataType={vGuideUserData.vTubeUserData.dataType}
        data={vGuideUserData.vTubeUserData}
        dialogTitle={vGuideUserData.userTitle}
      />
    </div>
  );
};

export default ProfileBannerPage;
