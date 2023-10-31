import React from "react";
import { formatNumber } from "../../lib/utils";
import {
  IconCalendar,
  IconMessageCircle,
  IconPrivacy,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "../icons/logo-icons";

const AssetDetails = () => {
  return (
    <section>
      <div className="flex flex-row gap-2 items-center">
        # ASS-BPO-112 | <IconPrivacy className="w-4 h-4" /> Public |{" "}
        <IconCalendar className="w-4 h-4" /> 15-Sep-2022 11:30 AM |{" "}
        <IconMessageCircle className="w-4 h-4" /> 100 |{" "}
        <IconThumbsUp className="w-4 h-4" /> {formatNumber(1100)} |{" "}
        <IconShare className="w-4 h-4" /> 320 | <IconStar className="w-4 h-4" />{" "}
        4.8(33)
      </div>
    </section>
  );
};

export default AssetDetails;
