import {
  IconGearServicesBtn,
  IconOrderBox,
  IconSalesGraph,
  IconShare,
  IconStar,
  IconSuccessGraph,
  IconThumbsUp,
  IconUserCustomerDollar,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";
import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";

export type LanceDataPointsProps = {
  isLoading?: boolean;
  services: number;
  sales: number;
  orders: number;
  customers: number;
  successRate: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
};

const LanceDataPoints = ({
  isLoading,
  services,
  sales,
  orders,
  customers,
  successRate,
  likes,
  shares,
  rating,
  ratingPoints,
}: LanceDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={services}
          description={"Services"}
          icon={IconGearServicesBtn}
          isLoading={isLoading}
        />
        <VDataPoint
          number={sales}
          description={"Sales"}
          icon={IconSalesGraph}
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
          icon={IconUserCustomerDollar}
          isLoading={isLoading}
        />
        <VDataPoint
          number={successRate}
          description={"Success Rate"}
          icon={IconSuccessGraph}
          isLoading={isLoading}
          isPercentage={true}
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

export default LanceDataPoints;
