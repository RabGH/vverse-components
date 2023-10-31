import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconCustomers,
  IconGraphDollar,
  IconOrderBox,
  IconShare,
  IconStar,
  IconThumbsUp,
  IconWebinar,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

type WebinarDataPointsProps = {
  isLoading?: boolean;
  webinars: number;
  sales: number;
  orders: number;
  customers: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
};

const WebinarDataPoints = ({
  isLoading,
  webinars,
  sales,
  orders,
  customers,
  likes,
  shares,
  ratingPoints,
  rating,
}: WebinarDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={webinars}
          description={"Webinars"}
          icon={IconWebinar}
          isLoading={isLoading}
        />
        <VDataPoint
          number={sales}
          description={"Sales"}
          icon={IconGraphDollar}
          isLoading={isLoading}
        />
        <VDataPoint
          number={orders}
          description={"Orders"}
          icon={IconOrderBox}
          isLoading={isLoading}
        />
        <VDataPoint
          number={customers}
          description={"Customers"}
          icon={IconCustomers}
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

export default WebinarDataPoints;
