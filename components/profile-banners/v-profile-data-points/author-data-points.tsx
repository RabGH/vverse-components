import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconFollowers,
  IconGrid,
  IconMembers,
  IconPost,
  IconShare,
  IconSocialPagesBtn,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

type AuthorDataPointsProps = {
  isLoading?: boolean;
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

/**
 * Renders the author data points section.
 *
 * @param {AuthorDataPointsProps} isLoading - Indicates whether the data is loading.
 * @param {AuthorDataPointsProps} posts - The number of posts.
 * @param {AuthorDataPointsProps} socialPages - The number of social pages.
 * @param {AuthorDataPointsProps} socialGroups - The number of social groups.
 * @param {AuthorDataPointsProps} followers - The number of followers.
 * @param {AuthorDataPointsProps} members - The number of members.
 * @param {AuthorDataPointsProps} likes - The number of likes.
 * @param {AuthorDataPointsProps} shares - The number of shares.
 * @param {AuthorDataPointsProps} rating - The rating value.
 * @param {AuthorDataPointsProps} ratingPoints - The number of rating points.
 * @return {JSX.Element} The rendered author data points section.
 */

const AuthorDataPoints = ({
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
}: AuthorDataPointsProps) => {
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

export default AuthorDataPoints;
