import {
  IconCalendar,
  IconCalendarTopDash,
  IconHashTag,
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
  const iconStyles = "w-5 h-5 text-primary";
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      <IconHashTag className={iconStyles} /> {assetId} | <IconPrivacy className={iconStyles} />{" "}
      {formatCapitalLetters(type)} | <IconCalendar className={iconStyles} />{" "}
      {dateStart} | <IconCalendarTopDash className={iconStyles} /> {dateEnd} |{" "}
      <IconMessageCircle className={iconStyles} /> {formatNumber(comments)} |{" "}
      <IconThumbsUp className={iconStyles} /> {formatNumber(likes)} |{" "}
      <IconShare className={iconStyles} /> {formatNumber(shares)} |{" "}
      <IconStar className={iconStyles} /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetBlogData;
