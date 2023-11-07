import {
  IconCalendar,
  IconChannelViews,
  IconGraphDollar,
  IconHashTag,
  IconOrderBox,
  IconPrivacy,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { formatCurrency, formatNumber } from "@/lib/utils";
import React from "react";

type AssetLanceServiceDataProps = {
  assetId: string;
  type: "private" | "public";
  date: string;
  sales: number;
  orders: number;
  customers: number;
  likes: number;
  shares: number;
  rating: number;
  ratingPoints: number;
};

/**
 * Renders the AssetLanceServiceData component, which displays the details of an asset.
 *
 * @param {AssetLanceServiceDataProps} props - The props object containing the data for the component.
 * @param {string} props.assetId - The ID of the asset.
 * @param {string} props.type - The type of the asset.
 * @param {string} props.date - The date of the asset.
 * @param {number} props.sales - The total sales of the asset.
 * @param {number} props.orders - The total number of orders for the asset.
 * @param {number} props.customers - The total number of customers for the asset.
 * @param {number} props.likes - The total number of likes for the asset.
 * @param {number} props.shares - The total number of shares for the asset.
 * @param {number} props.rating - The rating of the asset.
 * @param {number} props.ratingPoints - The total rating points of the asset.
 * @returns {JSX.Element} The rendered AssetLanceServiceData component.
 */

const AssetLanceServiceData = ({
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
}: AssetLanceServiceDataProps) => {
  const iconStyles = "w-5 h-5 text-primary";
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      <IconHashTag className={iconStyles} /> {assetId} | <IconPrivacy className={iconStyles} /> {type} |{" "}
      <IconCalendar className={iconStyles} /> {date} |{" "}
      <IconGraphDollar className={iconStyles} /> {formatCurrency(sales)} |{" "}
      <IconOrderBox className={iconStyles} /> {formatNumber(orders)} |{" "}
      <IconChannelViews className={iconStyles} /> {formatNumber(customers)} |{" "}
      <IconThumbsUp className={iconStyles} /> {formatNumber(likes)} |{" "}
      <IconShare className={iconStyles} /> {formatNumber(shares)} |{" "}
      <IconStar className={iconStyles} /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetLanceServiceData;
