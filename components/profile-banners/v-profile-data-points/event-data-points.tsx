import React from "react";

import { Button } from "@/components/ui/button";
import {
  IconCalendarEvent,
  IconCustomers,
  IconGraphDollar,
  IconOrderBox,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";

type EventDataPointsProps = {
  isLoading?: boolean;
  events: number;
  sales: number;
  orders: number;
  customers: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
};

/**
 * Renders the event data points component.
 *
 * @param {EventDataPointsProps} events - The events data.
 * @param {EventDataPointsProps} sales - The sales data.
 * @param {EventDataPointsProps} orders - The orders data.
 * @param {EventDataPointsProps} customers - The customers data.
 * @param {EventDataPointsProps} likes - The likes data.
 * @param {EventDataPointsProps} shares - The shares data.
 * @param {EventDataPointsProps} ratingPoints - The rating points data.
 * @param {EventDataPointsProps} rating - The rating data.
 * @param {boolean} isLoading - Indicates if the data is loading.
 * @return {JSX.Element} The event data points component.
 */

const EventDataPoints = ({
  events,
  sales,
  orders,
  customers,
  likes,
  shares,
  ratingPoints,
  rating,
  isLoading,
}: EventDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={events}
          description={"Events"}
          icon={IconCalendarEvent}
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

export default EventDataPoints;
