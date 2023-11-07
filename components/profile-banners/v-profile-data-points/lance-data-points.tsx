import {
  IconCustomers,
  IconGearServicesBtn,
  IconOrderBox,
  IconSalesGraph,
  IconShare,
  IconStar,
  IconSuccessGraph,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";
import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";

type LanceDataPointsProps = {
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

/**
 * Renders a section containing various data points for Lance.
 *
 * @param {boolean} isLoading - indicates if the data is still loading
 * @param {number} services - the number of services
 * @param {number} sales - the number of sales
 * @param {number} orders - the number of orders
 * @param {number} customers - the number of customers
 * @param {number} successRate - the success rate
 * @param {number} likes - the number of likes
 * @param {number} shares - the number of shares
 * @param {number} rating - the rating
 * @param {number} ratingPoints - the number of rating points
 * @return {JSX.Element} - the rendered section
 */

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
          icon={IconCustomers}
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
