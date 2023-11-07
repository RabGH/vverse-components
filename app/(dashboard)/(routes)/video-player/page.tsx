import React from "react";

import VHeroHeader from "@/components/v-ui/v-page-modules/hero-header";
import Heading from "@/components/nav/heading";
import { IconTVBtn } from "@/components/icons/logo-icons";
import { VVideoMain } from "@/components/video/v-video-main";

import { VVideoAds } from "@/components/video/v-video-ads";

// testing video player

/**
 * Renders the VideoPlayerPage component.
 *
 * @return {JSX.Element} The rendered VideoPlayerPage component.
 */
const VideoPlayerPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <VHeroHeader pillar={"V-Tube"} description={"Video player demos"} />
      <Heading
        title={"Main Video Player"}
        description={"Has all controls, large"}
        icon={IconTVBtn}
      />
      <VVideoMain />
      <Heading
        title={"Ads Video Player"}
        description={"Has minial controls, small"}
        icon={IconTVBtn}
      />
      <VVideoAds />
    </div>
  );
};

export default VideoPlayerPage;
