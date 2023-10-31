import React from "react";
import AssetBanner from "./asset-banner";

type AssetMapProps = {
  data: any;
  dataType: string;
};

const AssetMap = ({ data, dataType }: AssetMapProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      {data.map((item: any) => (
        <AssetBanner key={item.id} data={item} dataType={dataType} />
      ))}
    </div>
  );
};

export default AssetMap;
