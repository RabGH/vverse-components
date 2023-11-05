import {
  vAssetBlogData,
  vAssetLancerServiceData,
  vAssetNationData,
  vAssetTubeData,
} from "@/backend-data-test";
import AssetBannerProvider from "@/components/asset-banners/asset-banner-provider";
import { IconPostsBtn } from "@/components/icons/logo-icons";
import Heading from "@/components/nav/heading";
import VHeroHeader from "@/components/v-ui/v-page-modules/hero-header";
import React from "react";

const AssetBannerPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <VHeroHeader
        pillar={"V-Asset Banners"}
        description={"Asset banners for V-modules"}
      />
      <Heading
        title={"V-Blog Asset Banners"}
        description={""}
        icon={IconPostsBtn}
      />
      <AssetBannerProvider
        data={vAssetBlogData}
        dataType={"blog"}
      />
      <Heading
        title={"V-Nation Asset Banners"}
        description={""}
        icon={IconPostsBtn}
      />
      <AssetBannerProvider
        data={vAssetNationData}
        dataType={"nation"}
      />
      <Heading
        title={"V-Tube Asset Banners"}
        description={""}
        icon={IconPostsBtn}
      />
      <AssetBannerProvider
        data={vAssetTubeData}
        dataType={"tube"}
      />
      <Heading
        title={"V-Lancer Asset Banners"}
        description={""}
        icon={IconPostsBtn}
      />
      <AssetBannerProvider
        data={vAssetLancerServiceData}
        dataType={"lanceService"}
      />
    </div>
  );
};

export default AssetBannerPage;
