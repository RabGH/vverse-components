import { Separator } from "@/components/ui/separator";

import {
  IconMagnifyingPerson,
  IconWorkExperienceBtn,
  IconZap,
} from "@/components/icons/logo-icons";
import { Badge } from "@/components/ui/badge";
import UserVerifiedIcons from "@/components/profile-banners/v-guide/guide-verification";
import RankMedals, {
  RankMedalProps,
} from "@/components/profile-banners/master-banner/rank-medals";
import UserPoints from "@/components/profile-banners/master-banner/user-points";

type UserTitleBoxProps = {
  userName: string;
  userTitle: string;
  points: number;
  endorsements: number;
  thumbsup: number;
  shares: number;
  isLoading?: boolean;
  isGuide?: boolean;
  isFeatured?: boolean;
  isOpenToWork?: boolean;
  isHiring?: boolean;
  isOwner?: boolean;
  isIdVerified?: boolean;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  isAgreementVerified?: boolean;
  rank: RankMedalProps["rank"];
};

const UserTitleBox = ({
  userName,
  userTitle,
  points,
  endorsements,
  thumbsup,
  shares,
  rank = "standardSilver",
  isOwner = false,
  isLoading = false,
  isGuide = false,
  isFeatured = false,
  isOpenToWork = false,
  isHiring = false,
  isIdVerified = false,
  isAgreementVerified = false,
  isEmailVerified = false,
  isPhoneVerified = false,
}: UserTitleBoxProps) => {
  return (
    <div className="flex justify-between items-center space-x-40">
      <div className="flex flex-col">
        <h2 className="font-extrabold text-3xl">{userName}</h2>
        <p className="text-muted text-base">{userTitle}</p>
        <div className="flex flex-row gap-1 mt-1">
          {isGuide ? (
            <UserVerifiedIcons
              isIdVerified={isIdVerified}
              isEmailVerified={isEmailVerified}
              isPhoneVerified={isPhoneVerified}
              isAgreementVerified={isAgreementVerified}
              isLoading={isLoading}
            />
          ) : (
            <UserPoints
              points={points}
              endorsements={endorsements}
              thumbsup={thumbsup}
              shares={shares}
              isOwner={isOwner}
            />
          )}
          <Separator orientation="vertical" className="h-7 mx-1" />
          {isFeatured && (
            <Badge
              variant="bannerRed"
              size="featured"
              icon={<IconZap className="w-4 h-4" />}
            >
              Featured
            </Badge>
          )}
          {isOpenToWork && (
            <Badge
              variant="success"
              size="featured"
              icon={<IconWorkExperienceBtn className="w-4 h-4" />}
            >
              Open to Work
            </Badge>
          )}
          {isHiring && (
            <Badge
              variant="success"
              size="featured"
              icon={<IconMagnifyingPerson className="w-4 h-4" />}
            >
              Open to Hiring
            </Badge>
          )}
        </div>
      </div>
      <RankMedals rank={rank} />
    </div>
  );
};

export default UserTitleBox;
