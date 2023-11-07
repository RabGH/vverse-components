import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconCustomers,
  IconGraphDollar,
  IconOrderBox,
  IconShare,
  IconStar,
  IconThumbsUp,
  IconHeadphones,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

type ExpertDataPointsProps = {
  isLoading?: boolean;
  consultations: number;
  sales: number;
  orders: number;
  customers: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
};

/**
 * Renders a section with various data points for an expert.
 *
 * @param {boolean} isLoading - Indicates whether the data is currently loading.
 * @param {number} consultations - The number of consultations for the expert.
 * @param {number} sales - The number of sales for the expert.
 * @param {number} orders - The number of orders for the expert.
 * @param {number} customers - The number of customers for the expert.
 * @param {number} likes - The number of likes for the expert.
 * @param {number} shares - The number of shares for the expert.
 * @param {number} ratingPoints - The rating points for the expert.
 * @param {number} rating - The rating for the expert.
 * @return {JSX.Element} - The rendered data points section.
 */

const ExpertDataPoints = ({
  isLoading,
  consultations,
  sales,
  orders,
  customers,
  likes,
  shares,
  ratingPoints,
  rating,
}: ExpertDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={consultations}
          description={"Consultations"}
          icon={IconHeadphones}
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

export default ExpertDataPoints;
