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

/**
 * Renders the data points for webinars, sales, orders, customers, likes, shares, rating points, and rating.
 *
 * @param {boolean} isLoading - Indicates if the data is currently being loaded.
 * @param {number} webinars - The number of webinars.
 * @param {number} sales - The number of sales.
 * @param {number} orders - The number of orders.
 * @param {number} customers - The number of customers.
 * @param {number} likes - The number of likes.
 * @param {number} shares - The number of shares.
 * @param {number} ratingPoints - The number of rating points.
 * @param {number} rating - The rating value.
 * @return {ReactNode} - The rendered data points section.
 */

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
