import { VDataPoint } from "@/components/data-points/v-data-points";
import {
  IconPost,
  IconPostsBtn,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

interface AuthorDataTable {
  isLoading: boolean;
  posts: number;
  likes: number;
  shares: number;
  rating: number;
  ratingPoints: number;
}

const AuthorDataTable = ({
  isLoading,
  posts,
  likes,
  shares,
  rating,
  ratingPoints,
}: AuthorDataTable) => {
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
