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
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/v-dialog";
import { IconInfoFilledBlue } from "@/components/icons/logo-icons";
import { Loader2 } from "lucide-react";

type GuideProfileBannerDialogProps = {
  isLoading?: boolean;
  userInfoData?: UserInfoBoxProps;
  userName: string;
  userTitle: string;
  isOwner?: boolean;
  isConnected?: boolean;
  isLoggedIn?: boolean;
  points: number;
  endorsements: number;
  isFeatured: boolean;
  thumbsup: number;
  shares: number;
  dialogTitle: string;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  isAgreementVerified?: boolean;
  isIdVerified?: boolean;
  partOf: Record<string, boolean>;
  rank: RankMedalProps["rank"];
  guideUserData: GuideDataPointsProps;
  currency: string;
};

const GuideProfileBannerDialog = ({
  isLoading,
  userInfoData,
  guideUserData,
  userName,
  userTitle,
  points,
  thumbsup,
  shares,
  rank,
  endorsements,
  partOf,
  currency,
  dialogTitle,
  isEmailVerified = false,
  isPhoneVerified = false,
  isAgreementVerified = false,
  isIdVerified = false,
  isOwner = false,
  isConnected = true,
  isLoggedIn = true,
  isFeatured = true,
}: GuideProfileBannerDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-10 h-10 cursor-pointer">
        <IconInfoFilledBlue className="text-white bg-blue-400 rounded-full hover:translate-y-[-5px] ease-in-out transform duration-300" />
      </DialogTrigger>
      <DialogContent className="min-w-max min-h-max shadow-xl">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="h-11 w-11 animate-spin" />
          </div>
        ) : (
          <>
            <DialogTitle className="mb-2">{dialogTitle}</DialogTitle>
            <div className="flex flex-row justify-center gap-4 p-10">
              <UserLargeAvatar />
              <div className="flex flex-col gap-4">
                <div className="space-y-4">
                  <UserTitleBox
                    userName={userName}
                    userTitle={userTitle}
                    isGuide={true}
                    isLoading={isLoading}
                    points={points}
                    endorsements={endorsements}
                    isFeatured={isFeatured}
                    rank={rank}
                    thumbsup={thumbsup}
                    shares={shares}
                    isOwner={isOwner}
                    isEmailVerified={isEmailVerified}
                    isPhoneVerified={isPhoneVerified}
                    isAgreementVerified={isAgreementVerified}
                    isIdVerified={isIdVerified}
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
                  <UserInteraction
                    isConnected={isConnected}
                    isLoggedIn={isLoggedIn}
                    isOwner={isOwner}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GuideProfileBannerDialog;
