import { UserMediumAvatar } from "@/components/profile-banners/v-guide/user-md-avatar";
import { Separator } from "@/components/ui/separator";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import CollegeDataPoints, {
  CollegeDataPointsProps,
} from "@/components/profile-banners/v-college/college-data-points";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import { RankMedalProps } from "@/components/profile-banners/master-banner/rank-medals";

type CollegeProfileProps = {
  userName: string;
  userTitle: string;
  isLoading?: boolean;
  isOwner?: boolean;
  isConnected?: boolean;
  isLoggedIn?: boolean;
  points: number;
  endorsements: number;
  isFeatured: boolean;
  thumbsup: number;
  shares: number;
  rank: RankMedalProps["rank"];
  collegeUserData: CollegeDataPointsProps;
};

const CollegeProfile = ({
  isLoading,
  userName,
  userTitle,
  points,
  endorsements,
  rank,
  thumbsup,
  shares,
  collegeUserData,
  isFeatured = true,
  isOwner = false,
  isLoggedIn = false,
  isConnected = false,
}: CollegeProfileProps) => {
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
              <CollegeDataPoints
                isLoading={isLoading}
                courses={collegeUserData.courses}
                sales={collegeUserData.sales}
                orders={collegeUserData.orders}
                customers={collegeUserData.customers}
                likes={collegeUserData.likes}
                shares={collegeUserData.shares}
                ratingPoints={collegeUserData.ratingPoints}
                rating={collegeUserData.rating}
              />
              <Separator />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center ml-[-100px]">
          <UserInteraction
            isConnected={isLoggedIn}
            isLoggedIn={isConnected}
            isOwner={isOwner}
            isMiniView={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CollegeProfile;
