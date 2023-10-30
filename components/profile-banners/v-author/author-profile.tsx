import { UserMediumAvatar } from "@/components/profile-banners/v-guide/user-md-avatar";
import { Separator } from "@/components/ui/separator";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import AuthorDataPoints, {
  AuthorDataPointsProps,
} from "@/components/profile-banners/v-author/author-data-points";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import { RankMedalProps } from "@/components/profile-banners/master-banner/rank-medals";

type AuthorProfileProps = {
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
  authorUserData: AuthorDataPointsProps;
};

const AuthorProfile = ({
  isLoading,
  userName,
  userTitle,
  points,
  endorsements,
  rank,
  thumbsup,
  shares,
  authorUserData,
  isFeatured = true,
  isOwner = false,
  isLoggedIn = false,
  isConnected = false,
}: AuthorProfileProps) => {
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
              <AuthorDataPoints
                isLoading={isLoading}
                posts={authorUserData.posts}
                likes={authorUserData.likes}
                shares={authorUserData.shares}
                rating={authorUserData.rating}
                ratingPoints={authorUserData.ratingPoints}
                socialPages={authorUserData.socialPages}
                socialGroups={authorUserData.socialGroups}
                followers={authorUserData.followers}
                members={authorUserData.members}
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

export default AuthorProfile;
