import React from "react";

type AssetBlogDataProps = {
  id: number;
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
  id,
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
  return <div>AssetBlogData</div>;
};

export default AssetBlogData;
