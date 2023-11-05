"use client";

import { useEffect, useRef } from "react";

import {
  MediaPlayer,
  MediaProvider,
  Poster,
  type MediaPlayerInstance,
} from "@vidstack/react";

import { VideoAdsLayout } from "./video-ui/layouts/ads-layout";

export function VVideoAds() {
  let player = useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      // console.log('is paused?', '->', state.paused);
      // console.log('is audio view?', '->', state.viewType === 'audio');
    });
  }, []);

  return (
    <MediaPlayer
      className={`shadow-xl hover:shadow-none transition duration-300 ease-in-out 
      relative w-2/5 h-2/5 mx-auto bg-primary text-white font-sans overflow-hidden rounded-md 
      ring-mediaFocus data-[focus]:ring-4`}
      title="Sprite Fight"
      src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
      ref={player}
      style={{ width: "40%" }}
    >
      <MediaProvider>
        <Poster
          className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
          src="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200"
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
        <div className="absolute top-3 right-3 bg-white text-black px-1 py-[1px] text-xs font-semibold rounded-sm">
          Ad
        </div>
      </MediaProvider>

      <VideoAdsLayout thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt" />
    </MediaPlayer>
  );
}
