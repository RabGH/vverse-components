import React from "react";
import { UserMediumAvatar } from "@/components/profile-banners/v-guide/user-md-avatar";
import { Separator } from "@/components/ui/separator";
import LanceDataPoints, {
  LanceDataPointsProps,
} from "@/components/profile-banners/v-lance/lance-data-points";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import { RankMedalProps } from "@/components/profile-banners/master-banner/rank-medals";

type LanceProfileProps = {
  userName: string;
  userTitle: string;
  isLoading: boolean;
  isOwner?: boolean;
  isConnected?: boolean;
  isLoggedIn?: boolean;
  points: number;
  endorsements: number;
  isFeatured: boolean;
  thumbsup: number;
  shares: number;
  rank: RankMedalProps["rank"];
  lanceUserData: LanceDataPointsProps;
};

const LanceProfile = ({
  isLoading,
  userName,
  userTitle,
  points,
  endorsements,
  rank,
  thumbsup,
  shares,
  lanceUserData,
  isFeatured = true,
  isOwner = false,
  isLoggedIn = false,
  isConnected = false,
}: LanceProfileProps) => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <UserMediumAvatar />
      <div className="flex flex-col gap-4">
        <div>
          <UserTitleBox
            userName={userName}
            userTitle={userTitle}
            points={points}
            endorsements={endorsements}
            isFeatured={isFeatured}
            rank={rank}
            thumbsup={thumbsup}
            shares={shares}
            isOwner={isOwner}
          />
          <div className="ml-[-100px]">
            <div className="space-y-3">
              <Separator />
              <LanceDataPoints
                isLoading={isLoading}
                services={lanceUserData.services}
                sales={lanceUserData.sales}
                orders={lanceUserData.orders}
                customers={lanceUserData.customers}
                successRate={lanceUserData.successRate}
                likes={lanceUserData.likes}
                shares={lanceUserData.shares}
                ratingPoints={lanceUserData.ratingPoints}
                rating={lanceUserData.rating}
              />
              <Separator />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center ml-[-100px]">
          <UserInteraction
            isConnected={isConnected}
            isLoggedIn={isLoggedIn}
            isOwner={isOwner}
            isMiniView={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LanceProfile;
