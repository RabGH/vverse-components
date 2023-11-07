import {
  IconGraphDollar,
  IconOrderBox,
  IconProductsHeart,
  IconShare,
  IconStar,
  IconStore,
  IconThumbsUp,
  IconUserCustomerDollar,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";
import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import React from "react";

type MarketDataPointsProps = {
  isLoading?: boolean;
  stores: number;
  products: number;
  sales: number;
  orders: number;
  customers: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
};

/**
 * Renders the market data points section.
 *
 * @param {boolean} isLoading - Indicates if the data is being loaded.
 * @param {number} stores - The number of stores.
 * @param {number} products - The number of products.
 * @param {number} sales - The number of sales.
 * @param {number} orders - The number of orders.
 * @param {number} customers - The number of customers.
 * @param {number} likes - The number of likes.
 * @param {number} shares - The number of shares.
 * @param {number} ratingPoints - The rating points.
 * @param {number} rating - The rating value.
 * @return {JSX.Element} - The rendered market data points section.
 */

const MarketDataPoints = ({
  isLoading,
  stores,
  products,
  sales,
  orders,
  customers,
  likes,
  shares,
  ratingPoints,
  rating,
}: MarketDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={stores}
          description={"Stores"}
          icon={IconStore}
          isLoading={isLoading}
        />
        <VDataPoint
          number={products}
          description={"Products"}
          icon={IconProductsHeart}
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
          icon={IconUserCustomerDollar}
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

export default MarketDataPoints;
