import { UserMediumAvatar } from "@/components/profile-banners/v-guide/user-md-avatar";
import { Separator } from "@/components/ui/separator";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import JobsDataPoints, {
  JobsDataPointsProps,
} from "@/components/profile-banners/v-jobs/jobs-data-points";
import { RankMedalProps } from "@/components/profile-banners/master-banner/rank-medals";

type JobProfileProps = {
  userName: string;
  userTitle: string;
  isLoading: boolean;
  isOwner?: boolean;
  isConnected?: boolean;
  isLoggedIn?: boolean;
  isOpenToWork?: boolean;
  points: number;
  endorsements: number;
  isFeatured: boolean;
  thumbsup: number;
  shares: number;
  rank: RankMedalProps["rank"];
  jobUserData: JobsDataPointsProps;
};

const JobProfile = ({
  isLoading,
  userName,
  userTitle,
  points,
  endorsements,
  rank,
  thumbsup,
  shares,
  jobUserData,
  isFeatured = true,
  isOpenToWork = true,
  isOwner = false,
  isLoggedIn = false,
  isConnected = false,
}: JobProfileProps) => {
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
            isOpenToWork={isOpenToWork}
            rank={rank}
            thumbsup={thumbsup}
            shares={shares}
            isOwner={isOwner}
          />
          <div className="ml-[-100px]">
            <div className="space-y-3">
              <Separator />
              <JobsDataPoints
                isLoading={isLoading}
                experience={jobUserData.experience}
                salary={jobUserData.salary}
                likes={jobUserData.likes}
                shares={jobUserData.shares}
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
            isMiniView={false}
          />
        </div>
      </div>
    </div>
  );
};

export default JobProfile;
