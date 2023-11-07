import {
  IconCalendar,
  IconCustomers,
  IconGraphDollar,
  IconHashTag,
  IconOrderBox,
  IconPrivacy,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { formatCapitalLetters, formatNumber } from "@/lib/utils";
import React from "react";
import { formatCurrency } from "@/lib/utils";

type AssetCollegeDataProps = {
  assetId: string;
  type: "private" | "public";
  date: number;
  sales: number;
  orders: number;
  customers: number;
  likes: number;
  shares: number;
  rating: number;
  ratingPoints: number;
};

/**
 * Renders the AssetCollegeData component.
 *
 * @param {AssetCollegeDataProps} assetId - The ID of the asset.
 * @param {AssetCollegeDataProps} type - The type of the asset.
 * @param {AssetCollegeDataProps} date - The date of the asset.
 * @param {AssetCollegeDataProps} sales - The sales of the asset.
 * @param {AssetCollegeDataProps} orders - The number of orders of the asset.
 * @param {AssetCollegeDataProps} customers - The number of customers of the asset.
 * @param {AssetCollegeDataProps} likes - The number of likes of the asset.
 * @param {AssetCollegeDataProps} shares - The number of shares of the asset.
 * @param {AssetCollegeDataProps} rating - The rating of the asset.
 * @param {AssetCollegeDataProps} ratingPoints - The number of rating points of the asset.
 * @return {JSX.Element} The rendered AssetCollegeData component.
 */

const AssetCollegeData = ({
  assetId,
  type,
  date,
  sales,
  orders,
  customers,
  likes,
  shares,
  rating,
  ratingPoints,
}: AssetCollegeDataProps) => {
  const iconStyles = "w-5 h-5 text-primary";
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      <IconHashTag className={iconStyles} /> {assetId} | <IconPrivacy className={iconStyles} />{" "}
      {formatCapitalLetters(type)} | <IconCalendar className={iconStyles} />{" "}
      {date} | <IconGraphDollar className={iconStyles} />{" "}
      {formatCurrency(sales)} | <IconOrderBox className={iconStyles} />{" "}
      {formatNumber(orders)} | <IconCustomers className={iconStyles} />{" "}
      {formatNumber(customers)} | <IconThumbsUp className={iconStyles} />{" "}
      {formatNumber(likes)} | <IconShare className={iconStyles} />{" "}
      {formatNumber(shares)} | <IconStar className={iconStyles} />{" "}
      {rating?.toFixed(1)}({formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetCollegeData;
