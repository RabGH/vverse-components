import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconFollowers,
  IconShare,
  IconStar,
  IconTV,
  IconThumbsUp,
  IconUserCheck,
  IconVideo,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

type AuthorDataTable = {
  isLoading: boolean;
  channels: number;
  videos: number;
  subscribers: number;
  views: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
}

const AuthorDataTable = ({
  isLoading,
  channels,
  videos,
  subscribers,
  views,
  likes,
  shares,
  ratingPoints,
  rating,
}: AuthorDataTable) => {
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
          description={"Followers"}
          icon={IconFollowers}
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
