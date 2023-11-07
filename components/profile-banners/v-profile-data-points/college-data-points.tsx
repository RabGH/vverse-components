import React from "react";

import { Button } from "@/components/ui/button";
import {
  IconCoursesBtn,
  IconGraphDollar,
  IconOrderBox,
  IconShare,
  IconStar,
  IconThumbsUp,
  IconUserCustomerDollar,
} from "@/components/icons/logo-icons";
import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";

type CollegeDataPointsProps = {
  isLoading?: boolean;
  courses: number;
  sales: number;
  orders: number;
  customers: number;
  likes: number;
  shares: number;
  ratingPoints: number;
  rating: number;
};

/**
 * Renders college data points.
 *
 * @param {CollegeDataPointsProps} courses - The number of courses.
 * @param {CollegeDataPointsProps} sales - The number of sales.
 * @param {CollegeDataPointsProps} orders - The number of orders.
 * @param {CollegeDataPointsProps} customers - The number of customers.
 * @param {CollegeDataPointsProps} likes - The number of likes.
 * @param {CollegeDataPointsProps} shares - The number of shares.
 * @param {CollegeDataPointsProps} ratingPoints - The number of rating points.
 * @param {CollegeDataPointsProps} rating - The rating value.
 * @param {boolean} isLoading - Indicates if the data is still loading.
 *
 * @return {JSX.Element} The rendered college data points section.
 */

const CollegeDataPoints = ({
  courses,
  sales,
  orders,
  customers,
  likes,
  shares,
  ratingPoints,
  rating,
  isLoading,
}: CollegeDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={courses}
          description={"Courses"}
          icon={IconCoursesBtn}
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

export default CollegeDataPoints;
