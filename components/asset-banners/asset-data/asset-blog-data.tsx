import {
  IconCalendar,
  IconCalendarTopDash,
  IconMessageCircle,
  IconPrivacy,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { formatCapitalLetters, formatNumber } from "@/lib/utils";
import React from "react";

type AssetBlogDataProps = {
  assetId: string;
  type: "private" | "public";
  dateStart: string;
  dateEnd: string;
  comments: number;
  likes: number;
  shares: number;
  rating: number;
  ratingPoints: number;
};

const AssetBlogData = ({
  assetId,
  type,
  dateStart,
  dateEnd,
  comments,
  likes,
  shares,
  rating,
  ratingPoints,
}: AssetBlogDataProps) => {
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      # {assetId} | <IconPrivacy className="w-4 h-4" />{" "}
      {formatCapitalLetters(type)} | <IconCalendar className="w-4 h-4" />{" "}
      {dateStart} | <IconCalendarTopDash className="w-4 h-4" /> {dateEnd} |{" "}
      <IconMessageCircle className="w-4 h-4" /> {formatNumber(comments)} |{" "}
      <IconThumbsUp className="w-4 h-4" /> {formatNumber(likes)} |{" "}
      <IconShare className="w-4 h-4" /> {formatNumber(shares)} |{" "}
      <IconStar className="w-4 h-4" /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetBlogData;
