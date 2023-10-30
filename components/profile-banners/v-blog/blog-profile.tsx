import { UserMediumAvatar } from "@/components/profile-banners/v-guide/user-md-avatar";
import { Separator } from "@/components/ui/separator";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import BlogDataPoints, {
  BlogDataPointsProps,
} from "@/components/profile-banners/v-blog/blog-data-points";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import { RankMedalProps } from "@/components/profile-banners/master-banner/rank-medals";

type BlogProfileProps = {
  isLoading?: boolean;
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
  rank: RankMedalProps["rank"];
  blogUserData: BlogDataPointsProps;
};

const BlogProfile = ({
  isLoading,
  userName,
  userTitle,
  points,
  endorsements,
  rank,
  thumbsup,
  shares,
  blogUserData,
  isFeatured = true,
  isOwner = false,
  isLoggedIn = false,
  isConnected = false,
}: BlogProfileProps) => {
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
              <BlogDataPoints
                isLoading={isLoading}
                posts={blogUserData.posts}
                likes={blogUserData.likes}
                shares={blogUserData.shares}
                rating={blogUserData.rating}
                ratingPoints={blogUserData.ratingPoints}
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

export default BlogProfile;
