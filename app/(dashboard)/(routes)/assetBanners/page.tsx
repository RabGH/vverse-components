import { vAssetBlogData, vAssetNationData } from "@/backend-data-test";
import AssetBannerProvider from "@/components/asset-banners/asset-banner-provider";
import React from "react";

const AssetBannerPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <AssetBannerProvider data={vAssetBlogData} dataType={"blog"} />
      <AssetBannerProvider data={vAssetNationData} dataType={"nation"} />
    </div>
  );
};

export default AssetBannerPage;
