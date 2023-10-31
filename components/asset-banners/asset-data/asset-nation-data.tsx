import { IconCalendar, IconFollowers, IconPost, IconPrivacy, IconShare, IconStar, IconThumbsUp } from "@/components/icons/logo-icons";
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
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      # {assetId} | <IconPrivacy className="w-4 h-4" /> {type} |{" "}
      <IconCalendar className="w-4 h-4" /> {date} |{" "}
      <IconPost className="w-4 h-4" /> {formatNumber(posts)} |{" "}
      <IconFollowers className="w-4 h-4" /> {formatNumber(followers)} |{" "}
      <IconThumbsUp className="w-4 h-4" /> {formatNumber(likes)} |{" "}
      <IconShare className="w-4 h-4" /> {formatNumber(shares)} |{" "}
      <IconStar className="w-4 h-4" /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetNationData;
