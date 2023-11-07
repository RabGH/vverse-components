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
