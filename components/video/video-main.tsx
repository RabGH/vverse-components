"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { IconPause, IconPlayVideoFilled } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type MainVideoPlayer = {
  videoUrl: string;
  poster?: string;
};

const MainVideoPlayer = ({ videoUrl, poster }: MainVideoPlayer) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("pause", () => {
        setIsPaused(true);
      });
      video.addEventListener("play", () => {
        setIsPaused(false);
      });

      return () => {
        video.removeEventListener("pause", () => {
          setIsPaused(true);
        });
        video.removeEventListener("play", () => {
          setIsPaused(false);
        });
      };
    }
  }, []);

  const toggleVideoPlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPaused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div
      className="relative group cursor-pointer"
      onClick={toggleVideoPlayPause}
    >
      <label className="sr-only">Video Player</label>
      <div className="">
        <div></div>
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 z-50 group-hover:opacity-100 focus-within:opacity-100 p-2",
            isPaused ? "opacity-100" : "opacity-0",
            "transition-opacity duration-150 ease-in-out"
          )}
          tabIndex={0}
        >
          {isPaused ? (
            <Button
              variant="defaultNoBg"
              className="group active:bg-primary hover:-translate-y-[0.5px] transition duration-300 ease-in-out p-1 pl-2 flex items-center justify-center"
              icon={
                <IconPlayVideoFilled className="active:text-purple-700 w-4 h-4 text-primary hover:text-sky-400" />
              }
              onClick={toggleVideoPlayPause}
              tabIndex={0}
            />
          ) : (
            <Button
              variant="defaultNoBg"
              className="group active:bg-primary hover:-translate-y-[0.5px] transition duration-300 ease-in-out p-1 pl-2 flex items-center justify-center"
              icon={
                <IconPause className="active:text-purple-700 w-4 h-4 text-primary hover:text-sky-400" />
              }
              onClick={toggleVideoPlayPause}
            />
          )}
        </div>
      </div>
      <video
        ref={videoRef}
        className="w-full border border-gray-200 rounded-lg"
        poster={poster}
        tabIndex={0}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideoPlayer;
