"use client";

import React from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr-react";

const VideoPlayer = () => {
  return (
    <div>
      <Plyr
        controls
        source={{
          type: "video",
          sources: [
            {
              src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
              type: "video/mp4",
            },
          ],
        }}
      />
    </div>
  );
};

export default VideoPlayer;
