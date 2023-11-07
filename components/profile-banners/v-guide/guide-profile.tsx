import UserTags from "@/components/profile-banners/v-guide/guide-tags";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import { Separator } from "@/components/ui/separator";
import { UserLargeAvatar } from "./guide-lg-avatar";
import { UserInfoBoxProps } from "@/components/profile-banners/v-guide/guide-info-box";
import { RankMedalProps } from "@/components/profile-banners/master-banner/rank-medals";
import GuideDataPoints, {
  GuideDataPointsProps,
} from "@/components/profile-banners/v-guide/guide-data-points";

type GuideProfileBannerProps = {
  isLoading: boolean;
  userInfoData?: UserInfoBoxProps;
  userName: string;
  userTitle: string;
  points: number;
  endorsements: number;
  isFeatured: string;
  likes: number;
  shares: number;
  partOf: Record<string, boolean>;
  rank: RankMedalProps["rank"] | string;
  guideUserData: GuideDataPointsProps;
  currency: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isAgreementVerified: boolean;
  isIdVerified: boolean;
  profileType: string;
};

const GuideProfileBanner = ({
  isLoading,
  userInfoData,
  guideUserData,
  userName,
  userTitle,
  points,
  likes,
  shares,
  rank,
  endorsements,
  partOf,
  currency,
  isFeatured,
  profileType,
  isEmailVerified = false,
  isPhoneVerified = false,
  isAgreementVerified = false,
  isIdVerified = false,
}: GuideProfileBannerProps) => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <UserLargeAvatar
        profileType={profileType}
        isEmailVerified={isEmailVerified}
        isPhoneVerified={isPhoneVerified}
        isAgreementVerified={isAgreementVerified}
        isIdVerified={isIdVerified}
        isLoading={isLoading}
      />
      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <UserTitleBox
            userName={userName}
            userTitle={userTitle}
            endorsements={endorsements}
            isFeatured={isFeatured}
            rank={rank}
            likes={likes}
            shares={shares}
            points={points}
          />
          <Separator />
          <GuideDataPoints
            isLoading={isLoading}
            sales={guideUserData.sales}
            earnings={guideUserData.earnings}
            investments={guideUserData.investments}
            endorsements={guideUserData.endorsements}
            points={guideUserData.points}
            likes={guideUserData.likes}
            shares={guideUserData.shares}
            connections={guideUserData.connections}
            followers={guideUserData.followers}
            members={guideUserData.members}
            subscribers={guideUserData.subscribers}
            customers={guideUserData.customers}
            currency={currency}
            userInfoData={userInfoData}
          />
          <Separator />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center m-2 ml-[-300px]">
          <UserTags partOf={partOf} />
          <Separator />
          <UserInteraction />
        </div>
      </div>
    </div>
  );
};

export default GuideProfileBanner;
