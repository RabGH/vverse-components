import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconChannelViews,
  IconFollowers,
  IconShare,
  IconStar,
  IconTV,
  IconThumbsUp,
  IconUserCheck,
  IconVideo,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

type TubeDataPointsProps = {
  isLoading?: boolean;
  channels: number;
  videos: number;
  subscribers: number;
  views: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
};

/**
 * Renders the TubeDataPoints component.
 *
 * @param {boolean} isLoading - Indicates whether the data is loading or not.
 * @param {number} channels - The number of channels.
 * @param {number} videos - The number of videos.
 * @param {number} subscribers - The number of subscribers.
 * @param {number} views - The number of views.
 * @param {number} likes - The number of likes.
 * @param {number} shares - The number of shares.
 * @param {number} ratingPoints - The rating points.
 * @param {number} rating - The rating value.
 * @return {JSX.Element} - The rendered TubeDataPoints component.
 */

const TubeDataPoints = ({
  isLoading,
  channels,
  videos,
  subscribers,
  views,
  likes,
  shares,
  ratingPoints,
  rating,
}: TubeDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={channels}
          description={"Channels"}
          icon={IconTV}
          isLoading={isLoading}
        />
        <VDataPoint
          number={videos}
          description={"Videos"}
          icon={IconVideo}
          isLoading={isLoading}
        />
        <VDataPoint
          number={subscribers}
          description={"Subscribers"}
          icon={IconUserCheck}
          isLoading={isLoading}
        />
        <VDataPoint
          number={views}
          description={"Views"}
          icon={IconChannelViews}
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

export default TubeDataPoints;
