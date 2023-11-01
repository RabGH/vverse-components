import {
  IconCalendar,
  IconChannelViews,
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
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      # {assetId} | <IconPrivacy className="w-4 h-4" /> {type} |{" "}
      <IconCalendar className="w-4 h-4" /> {date} |{" "}
      <IconVideo className="w-4 h-4" /> {formatNumber(views)} |{" "}
      <IconUserCheck className="w-4 h-4" /> {formatNumber(subscribers)} |{" "}
      <IconChannelViews className="w-4 h-4" /> {formatNumber(channelFollowers)}{" "}
      | <IconThumbsUp className="w-4 h-4" /> {formatNumber(likes)} |{" "}
      <IconShare className="w-4 h-4" /> {formatNumber(shares)} |{" "}
      <IconStar className="w-4 h-4" /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default AssetTubeData;
