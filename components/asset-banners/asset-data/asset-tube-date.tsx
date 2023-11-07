import {
  IconCalendar,
  IconChannelViews,
  IconHashTag,
  IconPrivacy,
  IconShare,
  IconStar,
  IconThumbsUp,
  IconUserCheck,
  IconVideo,
} from "@/components/icons/logo-icons";
import { formatNumber } from "@/lib/utils";
import React from "react";

type AssetTubeDataProps = {
  assetId: string;
  type: "private" | "public";
  date: string;
  views: number;
  subscribers: number;
  channelFollowers: number;
  likes: number;
  shares: number;
  rating: number;
  ratingPoints: number;
};

const AssetTubeData = ({
  assetId,
  type,
  date,
  views,
  likes,
  shares,
  rating,
  ratingPoints,
  subscribers,
  channelFollowers,
}: AssetTubeDataProps) => {
  const iconStyles = "w-5 h-5 text-primary";
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      <IconHashTag className={iconStyles} /> {assetId} |{" "}
      <IconPrivacy className={iconStyles} /> {type} |{" "}
      <IconCalendar className={iconStyles} /> {date} |{" "}
      <IconVideo className={iconStyles} /> {formatNumber(views)} |{" "}
      <IconUserCheck className={iconStyles} /> {formatNumber(subscribers)} |{" "}
      <IconChannelViews className={iconStyles} />{" "}
      {formatNumber(channelFollowers)} | <IconThumbsUp className={iconStyles} />{" "}
      {formatNumber(likes)} | <IconShare className={iconStyles} />{" "}
      {formatNumber(shares)} | <IconStar className={iconStyles} />{" "}
      {rating?.toFixed(1)}({formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetTubeData;
