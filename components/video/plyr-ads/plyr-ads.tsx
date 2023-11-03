"use client";

import React from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr-react";

import "./plyr-ads.module.css";

type MainVideoPlayer = {
  adUrl: string;
  thumbnail?: string;
};

const AdsVideoPlayer = ({ adUrl, thumbnail }: MainVideoPlayer) => {
  return (
    <div className="flex flex-col items-center relative">
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: adUrl,
              type: "video/mp4",
            },
          ],
          poster: thumbnail,
        }}
        autoPlay={true}
        muted={true}
        loop={true}
        controls={false}
        options={{}}
      />
      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-lg">
        AD
      </div>
    </div>
  );
};

export default AdsVideoPlayer;
