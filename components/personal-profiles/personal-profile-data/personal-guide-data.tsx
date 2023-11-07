import {
  IconAssetHandDiamond,
  IconBullHorn,
  IconConnectionsBtn,
  IconInvestmentsHandsGraph,
  IconSalesGraph,
  IconStar,
} from "@/components/icons/logo-icons";
import { formatCurrency, formatNumber } from "@/lib/utils";
import React from "react";

type PersonalGuideDataProps = {
  assets: number;
  sales: number;
  endorsements: number;
  connections: number;
  rating: number;
  ratingPoints: number;
  investments: number;
};

/**
 * Renders the personal guide data with icons and formatted numbers.
 *
 * @param {PersonalGuideDataProps} assets - The assets data.
 * @param {PersonalGuideDataProps} sales - The sales data.
 * @param {PersonalGuideDataProps} investments - The investments data.
 * @param {PersonalGuideDataProps} endorsements - The endorsements data.
 * @param {PersonalGuideDataProps} connections - The connections data.
 * @param {PersonalGuideDataProps} rating - The rating data.
 * @param {PersonalGuideDataProps} ratingPoints - The rating points data.
 * @return {JSX.Element} The rendered personal guide data.
 */

const PersonalGuideData = ({
  assets,
  sales,
  investments,
  endorsements,
  connections,
  rating,
  ratingPoints,
}: PersonalGuideDataProps) => {
  const iconStyles = "w-5 h-5 text-primary";
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      <IconAssetHandDiamond className={iconStyles} /> {formatNumber(assets)} |{" "}
      <IconSalesGraph className={iconStyles} /> {formatCurrency(sales)} |{" "}
      <IconInvestmentsHandsGraph className={iconStyles} />{" "}
      {formatNumber(investments)} | {formatCurrency(sales)} |{" "}
      <IconBullHorn className={iconStyles} /> {formatNumber(endorsements)} |{" "}
      <IconConnectionsBtn className={iconStyles} /> {formatNumber(connections)}{" "}
      | <IconStar className={iconStyles} /> {rating?.toFixed(1)}(
      {formatNumber(ratingPoints)})
    </div>
  );
};

export default PersonalGuideData;
