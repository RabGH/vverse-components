import React from "react";

import AssetBanner from "@/components/asset-banners/asset-banner";
import { AssetInteractionTopProps } from "@/components/asset-banners/asset-banner-interact-top";

// specify types for data

type AssetMapProps = {
  data: any;
  dataType: string;
  buttonDataType: AssetInteractionTopProps["buttonDataType"];
};

/**
 * Renders a map of assets.
 *
 * @param {AssetMapProps} data - The data for the map.
 * @param {string} dataType - The type of data.
 * @param {string} buttonDataType - The type of button data.
 * @return {JSX.Element} - The rendered map of assets.
 */

const AssetMap = ({ data, dataType, buttonDataType }: AssetMapProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      {data.map((item: any) => (
        <AssetBanner
          key={item.id}
          data={item}
          dataType={dataType}
          buttonDataType={buttonDataType}
        />
      ))}
    </div>
  );
};

export default AssetMap;
