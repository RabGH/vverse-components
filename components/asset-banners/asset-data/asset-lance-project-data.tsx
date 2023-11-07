import {
  IconCalendar,
  IconHashTag,
  IconMembers,
  IconPrivacy,
  IconShare,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { formatNumber } from "@/lib/utils";
import React from "react";

type AssetLanceServiceDataProps = {
  assetId: string;
  type: "private" | "public";
  date: string;
  collaborators: number;
  likes: number;
  shares: number;
};

const AssetLanceServiceData = ({
  assetId,
  type,
  date,
  collaborators,
  likes,
  shares,
}: AssetLanceServiceDataProps) => {
  const iconStyles = "w-5 h-5 text-primary";
  return (
    <div className="flex flex-row gap-2 items-center flex-wrap">
      <IconHashTag className={iconStyles} /> {assetId} |{" "}
      <IconPrivacy className={iconStyles} /> {type} |{" "}
      <IconCalendar className={iconStyles} /> {date} |{" "}
      <IconMembers className={iconStyles} /> {collaborators} |{" "}
      <IconThumbsUp className={iconStyles} /> {formatNumber(likes)} |{" "}
      <IconShare className={iconStyles} /> {formatNumber(shares)}
    </div>
  );
};

export default AssetLanceServiceData;
