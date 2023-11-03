import React from "react";

import MainVideoPlayer from "@/components/video/plyr-main";
import { videoPlayerData } from "@/backend-data-test";

// testing video player

const VideoPlayerPage = () => {
  return (
    <div>
      <MainVideoPlayer
      thumbnail={videoPlayerData[0].poster}
        videoUrl={videoPlayerData[0].videoUrl}
      />
    </div>
  );
};

export default VideoPlayerPage;
