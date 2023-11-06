import {
  IconCalendar,
  IconCustomers,
  IconGraphDollar,
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
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      # {assetId} | <IconPrivacy className="w-4 h-4" />{" "}
      {formatCapitalLetters(type)} | <IconCalendar className="w-4 h-4" /> {date}{" "}
      | <IconGraphDollar className="w-4 h-4" /> {formatCurrency(sales)} |{" "}
      <IconOrderBox className="w-4 h-4" /> {formatNumber(orders)} |{" "}
      <IconCustomers className="w-4 h-4" /> {formatNumber(customers)} |{" "}
      <IconThumbsUp className="w-4 h-4" /> {formatNumber(likes)} |{" "}
      <IconShare className="w-4 h-4" /> {formatNumber(shares)} |{" "}
      <IconStar className="w-4 h-4" /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetCollegeData;
