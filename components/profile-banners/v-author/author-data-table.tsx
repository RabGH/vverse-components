import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconFollowers,
  IconGrid,
  IconMembers,
  IconPost,
  IconPostsBtn,
  IconShare,
  IconSocialPagesBtn,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

type AuthorDataTableProps = {
  isLoading: boolean;
  posts: number;
  socialPages: number;
  socialGroups: number;
  followers: number;
  members: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
};

const AuthorDataTable = ({
  isLoading,
  posts,
  socialPages,
  socialGroups,
  followers,
  members,
  likes,
  shares,
  rating,
  ratingPoints,
}: AuthorDataTableProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={posts}
          description={"Posts"}
          icon={IconPost}
          isLoading={isLoading}
        />
        <VDataPoint
          number={socialPages}
          description={"Social Pages"}
          icon={IconSocialPagesBtn}
          isLoading={isLoading}
        />
        <VDataPoint
          number={socialGroups}
          description={"Social Groups"}
          icon={IconGrid}
          isLoading={isLoading}
        />
        <VDataPoint
          number={followers}
          description={"Followers"}
          icon={IconFollowers}
          isLoading={isLoading}
        />
        <VDataPoint
          number={members}
          description={"Members"}
          icon={IconMembers}
          isLoading={isLoading}
        />
        <VDataPoint
          number={likes}
          description={"Likes"}
          icon={IconThumbsUp}
          isLoading={isLoading}
        />
        <VDataPoint
          number={shares}
          description={"Shares"}
          icon={IconShare}
          isLoading={isLoading}
        />
        <VDataPoint
          number={ratingPoints}
          description={"Rating"}
          icon={IconStar}
          isLoading={isLoading}
          rating={rating}
          isRated={true}
        />
      </div>
      <Button variant="bannerBlueRed" size="banner" className="ml-6">
        Edit Profile
      </Button>
    </section>
  );
};

export default AuthorDataTable;
