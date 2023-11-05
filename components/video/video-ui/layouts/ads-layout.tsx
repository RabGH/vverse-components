// import captionStyles from "./captions.module.css";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Captions, Controls, Gesture } from "@vidstack/react";

import * as Buttons from "../video-buttons";
import * as Sliders from "../video-sliders";
import { TimeGroup } from "../video-time-group";

// Offset tooltips/menus/slider previews in the lower controls group so they're clearly visible.
const popupOffset = 30;

export interface VideoLayoutProps {
  thumbnails?: string;
}

export function VideoAdsLayout({ thumbnails }: VideoLayoutProps) {
  return (
    <>
      <Gestures />
      <Controls.Root className="mt-1 media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity">
        <Tooltip.Provider>
          <div className="flex-1" />
          <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2 gap-2">
            <Buttons.Play
              tooltipAlign="start"
              tooltipOffset={popupOffset}
              className="w-4 h-4 text-white"
            />

            <Sliders.Time />

            <Buttons.Mute
              tooltipOffset={popupOffset}
              className="w-5 h-5 text-white"
            />
            <Sliders.Volume />
            <div className="flex-1" />
            <Buttons.Fullscreen
              tooltipAlign="end"
              tooltipOffset={popupOffset}
              className="mr-2 text-white"
            />
          </Controls.Group>
          <Controls.Group className="absolute top-0 left-0 mt-1">
            <TimeGroup />
          </Controls.Group>
        </Tooltip.Provider>
      </Controls.Root>
    </>
  );
}

function Gestures() {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  );
}
