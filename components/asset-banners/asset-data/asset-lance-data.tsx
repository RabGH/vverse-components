import {
  IconCalendar,
  IconChannelViews,
  IconGraphDollar,
  IconOrderBox,
  IconPrivacy,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { formatNumber } from "@/lib/utils";
import React from "react";

type AssetLanceDataProps = {
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

const AssetLanceData = ({
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
}: AssetLanceDataProps) => {
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      # {assetId} | <IconPrivacy className="w-4 h-4" /> {type} |{" "}
      <IconCalendar className="w-4 h-4" /> {date} |{" "}
      <IconGraphDollar className="w-4 h-4" /> {formatNumber(sales)} |{" "}
      <IconOrderBox className="w-4 h-4" /> {formatNumber(orders)} |{" "}
      <IconChannelViews className="w-4 h-4" /> {formatNumber(customers)} |{" "}
      <IconThumbsUp className="w-4 h-4" /> {formatNumber(likes)} |{" "}
      <IconShare className="w-4 h-4" /> {formatNumber(shares)} |{" "}
      <IconStar className="w-4 h-4" /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetLanceData;
