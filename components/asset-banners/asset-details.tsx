import React from "react";
import { IconCalendar, IconPrivacy } from "../icons/logo-icons";

const AssetDetails = () => {
  return (
    <div>
      <p className="flex flex-row gap-2 items-center">
        # ASS-BPO-112 | <IconPrivacy className="w-4 h-4" /> Public |{" "}
        <IconCalendar className="w-4 h-4" /> 15-Sep-2022 11:30 AM
      </p>
    </div>
  );
};

export default AssetDetails;
