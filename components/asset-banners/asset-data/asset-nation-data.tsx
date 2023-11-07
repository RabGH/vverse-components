import {
  IconCalendar,
  IconFollowers,
  IconHashTag,
  IconPost,
  IconPrivacy,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { formatNumber } from "@/lib/utils";
import React from "react";

type AssetNationDataProps = {
  assetId: string;
  type: "private" | "public";
  date: string;
  posts: number;
  likes: number;
  shares: number;
  rating: number;
  ratingPoints: number;
  followers: number;
};

const AssetNationData = ({
  assetId,
  type,
  date,
  posts,
  likes,
  shares,
  rating,
  ratingPoints,
  followers,
}: AssetNationDataProps) => {
  const iconStyles = "w-5 h-5 text-primary";
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      <IconHashTag className={iconStyles} /> {assetId} | <IconPrivacy className={iconStyles} /> {type} |{" "}
      <IconCalendar className={iconStyles} /> {date} |{" "}
      <IconPost className={iconStyles} /> {formatNumber(posts)} |{" "}
      <IconFollowers className={iconStyles} /> {formatNumber(followers)} |{" "}
      <IconThumbsUp className={iconStyles} /> {formatNumber(likes)} |{" "}
      <IconShare className={iconStyles} /> {formatNumber(shares)} |{" "}
      <IconStar className={iconStyles} /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetNationData;
