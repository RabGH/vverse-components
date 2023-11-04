"use client";

import React, { useState, useRef, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { IconPlayVideoFilled } from "../icons/logo-icons";
import { cn } from "@/lib/utils";

type AdVideoPlayer = {
  adUrl: string;
  poster?: string;
};

const AdVideoPlayer = ({ adUrl, poster }: AdVideoPlayer) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  return (
    <div className="relative w-2/5 h-fit mx-auto shadow-xl hover:shadow-none hover:-translate-y-1 transition duration-300 ease-in-out">
      <video
        ref={videoRef}
        className="border border-gray-200 rounded-xl relative"
        muted
        poster={poster}
        controls={isPlaying}
        onPause={handlePause}
      >
        <source src={adUrl} type="video/mp4" />
      </video>
      <div className="absolute top-3 right-3 bg-white text-black px-1 py-[1px] text-xs font-semibold rounded-sm">
        Ad
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          id="play"
          variant="default"
          className={cn("w-12 h-12 absolute rounded-full border-white", {
            hidden: isPlaying,
          })}
          onClick={handleToggle}
        >
          <IconPlayVideoFilled className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default AdVideoPlayer;
