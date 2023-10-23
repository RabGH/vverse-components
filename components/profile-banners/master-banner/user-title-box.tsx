import { Separator } from "@/components/ui/separator";

import { IconZap } from "@/components/icons/logo-icons";
import { Badge } from "@/components/ui/badge";
import UserVerifiedIcons from "@/components/profile-banners/v-guide/user-verification-icons";
import RankMedals from "@/components/profile-banners/master-banner/rank-medals";
import UserPoints from "@/components/profile-banners/master-banner/user-points";

interface UserTitleBoxProps {
  userName: string;
  userTitle: string;
  isLoading?: boolean;
  isGuide?: boolean;
  isWork?: boolean;
  points: number;
  endorsements: number;
}

const UserTitleBox = ({
  userName,
  userTitle,
  points,
  endorsements,
  isLoading = false,
  isGuide = false,
  isWork = false,
}: UserTitleBoxProps) => {
  return (
    <div className="flex justify-between items-center space-x-40">
      <div className="flex flex-col">
        <h2 className="font-extrabold text-3xl">{userName}</h2>
        <p className="text-muted text-base">{userTitle}</p>
        <div className="flex flex-row gap-1 mt-1">
          {isGuide ? (
            <UserVerifiedIcons
              isIdVerified={false}
              isEmailVerified={true}
              isPhoneVerified={true}
              isAgreementVerified={false}
              isLoading={isLoading}
            />
          ) : (
            <UserPoints points={points} endorsements={endorsements} />
          )}
          <Separator orientation="vertical" className="h-7 mx-1" />
          {isWork ? (
            <Badge
              variant="success"
              size="featured"
              icon={<IconZap className="w-4 h-4" />}
            >
              Open to Work
            </Badge>
          ) : (
            <Badge
              variant="bannerRed"
              size="featured"
              icon={<IconZap className="w-4 h-4" />}
            >
              Featured
            </Badge>
          )}
        </div>
      </div>
      <RankMedals rank={"standardSilver"} />
    </div>
  );
};

export default UserTitleBox;
