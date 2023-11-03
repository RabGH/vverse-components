import React from "react";

import MainVideoPlayer from "@/components/video/plyr-main/plyr-main";
import { videoPlayerData } from "@/backend-data-test";
import VHeroHeader from "@/components/v-ui/v-page-modules/hero-header";
import Heading from "@/components/nav/heading";
import { IconTVBtn } from "@/components/icons/logo-icons";
import AdsVideoPlayer from "@/components/video/plyr-ads/plyr-ads";

// testing video player

const VideoPlayerPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <VHeroHeader pillar={"V-Tube"} description={"Video player demos"} />
      <Heading
        title={"Main Video Player"}
        description={"Has all controls, large"}
        icon={IconTVBtn}
      />
      <MainVideoPlayer
        thumbnail={videoPlayerData[0].poster}
        videoUrl={videoPlayerData[0].videoUrl}
      />
      <Heading
        title={"Ads Video Player"}
        description={"Has minial controls, small"}
        icon={IconTVBtn}
      />
      <AdsVideoPlayer
        thumbnail={videoPlayerData[0].poster}
        adUrl={videoPlayerData[0].videoUrl}
      />
    </div>
  );
};

export default VideoPlayerPage;
