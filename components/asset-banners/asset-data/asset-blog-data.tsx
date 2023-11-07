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

/**
 * Renders the AssetBlogData component.
 *
 * @param {AssetBlogDataProps} props - The props object containing the following properties:
 *   - assetId: string - The ID of the asset.
 *   - type: string - The type of the asset.
 *   - dateStart: string - The start date of the asset.
 *   - dateEnd: string - The end date of the asset.
 *   - comments: number - The number of comments on the asset.
 *   - likes: number - The number of likes on the asset.
 *   - shares: number - The number of shares of the asset.
 *   - rating: number | undefined - The rating of the asset, if available.
 *   - ratingPoints: number - The total rating points of the asset.
 * @return {JSX.Element} The rendered AssetBlogData component.
 */

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
