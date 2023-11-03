"use client";

import React from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr-react";

type MainVideoPlayer = {
  videoUrl: string;
  thumbnail?: string
  // chapters?: { title: string; url: string }[];
};

const MainVideoPlayer = ({
  videoUrl,
  thumbnail,
}: // chapters,
MainVideoPlayer) => {
  return (
    <div className="flex flex-col items-center">
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: videoUrl,
              type: "video/mp4",
            },
          ],
          poster: thumbnail,
          // tracks: chapters?.map((chapter) => ({
          //   kind: "chapters",
          //   label: chapter.title,
          //   src: chapter.url,
          //   srclang: "en",
          // })),
        }}
        autoPlay={false}
        muted={false}
        loop={false}
        controls={true}
        // className="w-full h-full lg:w-[1280px] lg:h-[720px] rounded-xl hover:shadow-xl shadow-sm"
        options={{
          captions: {
            active: true,
            language: "en",
          },
          settings: ["captions"],
          fullscreen: {
            enabled: true,
          },
          clickToPlay: true,
          tooltips: {
            controls: true,
          },
          displayDuration: true,
          keyboard: {
            focused: true,
            global: true,
          },
          seekTime: 10,
          speed: {
            selected: 1,
            options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
          },
          // previewThumbnails: {
          //   enabled: true,
          //   src: videoUrl + ".jpg",
          // },
        }}
      />
    </div>
  );
};

export default MainVideoPlayer;
