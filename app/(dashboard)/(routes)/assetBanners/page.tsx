import {
  vAssetBlogData,
  vAssetLancerServiceData,
  vAssetNationData,
  vAssetTubeData,
} from "@/backend-data-test";
import AssetBannerProvider from "@/components/asset-banners/asset-banner-provider";
import React from "react";

const AssetBannerPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* <AssetBannerProvider
        data={vAssetBlogData}
        dataType={"blog"}
        isOwner={false}
      />
      <AssetBannerProvider
        data={vAssetNationData}
        dataType={"nation"}
        isOwner={false}
      />
      <AssetBannerProvider
        data={vAssetTubeData}
        dataType={"tube"}
        isOwner={false}
      /> */}
      <AssetBannerProvider
        data={vAssetLancerServiceData}
        dataType={"lanceService"}
        isOwner={false}
      />
    </div>
  );
};

export default AssetBannerPage;
