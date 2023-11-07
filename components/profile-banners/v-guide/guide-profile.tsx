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

/**
 * Renders the profile banner for a guide.
 *
 * @param {boolean} isLoading - Indicates if the data is still being loaded.
 * @param {object} userInfoData - The user's information data.
 * @param {object} guideUserData - The guide's information data.
 * @param {string} userName - The user's name.
 * @param {string} userTitle - The user's title.
 * @param {number} points - The user's points.
 * @param {number} likes - The number of likes the user has received.
 * @param {number} shares - The number of shares the user has received.
 * @param {number} rank - The user's rank.
 * @param {number} endorsements - The number of endorsements the user has received.
 * @param {string} partOf - The user's group information.
 * @param {string} currency - The user's currency.
 * @param {boolean} isFeatured - Indicates if the user is featured.
 * @param {string} profileType - The user's profile type.
 * @param {boolean} isEmailVerified - Indicates if the user's email is verified. Default is false.
 * @param {boolean} isPhoneVerified - Indicates if the user's phone is verified. Default is false.
 * @param {boolean} isAgreementVerified - Indicates if the user's agreement is verified. Default is false.
 * @param {boolean} isIdVerified - Indicates if the user's ID is verified. Default is false.
 * @return {JSX.Element} The profile banner component.
 */

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
