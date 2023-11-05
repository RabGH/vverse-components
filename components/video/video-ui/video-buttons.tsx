import * as Tooltip from "@radix-ui/react-tooltip";
import { IconPause, IconPlayVideoFilled } from "../../icons/logo-icons";
import {
  CaptionButton,
  FullscreenButton,
  isTrackCaptionKind,
  MuteButton,
  PIPButton,
  PlayButton,
  useMediaState,
} from "@vidstack/react";
import {
  Minimize as FullscreenExitIcon,
  Maximize as FullscreenIcon,
  VolumeX as MuteIcon,
  PictureInPictureIcon as PictureInPictureExitIcon,
  PictureInPicture2 as PictureInPictureIcon,
  SubtitlesIcon,
  Volume2 as VolumeHighIcon,
  Volume1 as VolumeLowIcon,
} from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export interface MediaButtonProps {
  tooltipSide?: Tooltip.TooltipContentProps["side"];
  tooltipAlign?: Tooltip.TooltipContentProps["align"];
  tooltipOffset?: number;
  className?: string;
}

export const buttonClass = cva(
  `group ring-mediaFocus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center 
  rounded-md outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden`,
  {
    variants: {
      variant: {
        default: "text-primary",
      },

      size: {
        default: "w-7 h-7",
        ad: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const tooltipClass = cva(
  `animate-out fade-out slide-out-to-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in 
  data-[state=delayed-open]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white 
  parent-data-[open]:hidden`,
  {
    variants: {
      variant: {
        default: "text-primary",
      },

      size: {
        default: "w-5 h-5",
        ad: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Play({
  tooltipOffset = 0,
  tooltipSide = "top",
  tooltipAlign = "center",
  className,
}: MediaButtonProps) {
  const isPaused = useMediaState("paused");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PlayButton className={cn(buttonClass, className)}>
          {isPaused ? (
            <IconPlayVideoFilled className="w-5 h-5 translate-x-px text-primary" />
          ) : (
            <IconPause className="w-5 h-5 text-primary" />
          )}
        </PlayButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={cn(tooltipClass, className)}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        {isPaused ? "Play" : "Pause"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Mute({
  tooltipOffset = 0,
  tooltipSide = "top",
  tooltipAlign = "center",
  className,
}: MediaButtonProps) {
  const volume = useMediaState("volume"),
    isMuted = useMediaState("muted");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <MuteButton className={cn(buttonClass, className)}>
          {isMuted || volume == 0 ? (
            <MuteIcon className="w-5 h-5 text-primary" />
          ) : volume < 0.5 ? (
            <VolumeLowIcon className="w-5 h-5 text-primary" />
          ) : (
            <VolumeHighIcon className="w-5 h-5 text-primary" />
          )}
        </MuteButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={cn(tooltipClass, className)}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        {isMuted ? "Unmute" : "Mute"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Caption({
  tooltipOffset = 0,
  tooltipSide = "top",
  tooltipAlign = "center",
  className,
}: MediaButtonProps) {
  const track = useMediaState("textTrack"),
    isOn = track && isTrackCaptionKind(track);
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <CaptionButton className={cn(buttonClass, className)}>
          <SubtitlesIcon
            className={`text-primary w-5 h-5 ${
              !isOn ? "text-blue-500/60" : ""
            }`}
          />
        </CaptionButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={cn(tooltipClass, className)}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        {isOn ? "Closed-Captions Off" : "Closed-Captions On"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function PIP({
  tooltipOffset = 0,
  tooltipSide = "top",
  tooltipAlign = "center",
  className,
}: MediaButtonProps) {
  const isActive = useMediaState("pictureInPicture");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PIPButton className={cn(buttonClass, className)}>
          {isActive ? (
            <PictureInPictureExitIcon className="w-5 h-5 text-primary" />
          ) : (
            <PictureInPictureIcon className="w-5 h-5 text-primary" />
          )}
        </PIPButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={cn(tooltipClass, className)}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        {isActive ? "Exit PIP" : "Enter PIP"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Fullscreen({
  tooltipOffset = 0,
  tooltipSide = "top",
  tooltipAlign = "center",
  className,
}: MediaButtonProps) {
  const isActive = useMediaState("fullscreen");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <FullscreenButton className={cn(buttonClass, className)}>
          {isActive ? (
            <FullscreenExitIcon className="w-5 h-5 text-primary" />
          ) : (
            <FullscreenIcon className="w-5 h-5 text-primary" />
          )}
        </FullscreenButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={cn(tooltipClass, className)}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        {isActive ? "Exit Fullscreen" : "Enter Fullscreen"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
