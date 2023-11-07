import * as Tooltip from "@radix-ui/react-tooltip";
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

import { IconPause, IconPlayVideoFilled } from "@/components/icons/logo-icons";
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

interface PlayProps extends MediaButtonProps {
  playIconClass?: string;
  pauseIconClass?: string;
}

/**
 * Renders a Play component with optional tooltip and icon customization.
 *
 * @param {number} tooltipOffset - The offset of the tooltip from the trigger element.
 * @param {string} tooltipSide - The side of the tooltip relative to the trigger element.
 * @param {string} tooltipAlign - The alignment of the tooltip relative to the trigger element.
 * @param {string} className - Additional CSS class for styling the component.
 * @param {string} playIconClass - CSS class for styling the play icon.
 * @param {string} pauseIconClass - CSS class for styling the pause icon.
 * @return {JSX.Element} The rendered Play component.
 */

export function Play({
  tooltipOffset = 0,
  tooltipSide = "top",
  tooltipAlign = "center",
  className,
  playIconClass = "w-5 h-5 translate-x-px text-primary",
  pauseIconClass = "w-5 h-5 text-primary",
}: PlayProps) {
  const isPaused = useMediaState("paused");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PlayButton className={cn(buttonClass, className)}>
          {isPaused ? (
            <IconPlayVideoFilled className={cn(playIconClass, className)} />
          ) : (
            <IconPause className={cn(pauseIconClass, className)} />
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

interface MuteProps extends MediaButtonProps {
  IconMute?: string;
  IconVolumeLow?: string;
  IconVolumeHigh?: string;
}


/**
 * Renders a mute button with an optional tooltip.
 *
 * @param {number} tooltipOffset - The offset of the tooltip.
 * @param {string} tooltipSide - The side of the tooltip.
 * @param {string} tooltipAlign - The alignment of the tooltip.
 * @param {string} className - Additional CSS class for the mute button.
 * @param {string} IconMute - The CSS class for the mute icon.
 * @param {string} IconVolumeLow - The CSS class for the volume low icon.
 * @param {string} IconVolumeHigh - The CSS class for the volume high icon.
 * @return {JSX.Element} The rendered mute button.
 */

export function Mute({
  tooltipOffset = 0,
  tooltipSide = "top",
  tooltipAlign = "center",
  className,
  IconMute = "w-5 h-5 text-primary",
  IconVolumeLow = "w-5 h-5 text-primary",
  IconVolumeHigh = "w-5 h-5 text-primary",
}: MuteProps) {
  const volume = useMediaState("volume"),
    isMuted = useMediaState("muted");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <MuteButton className={cn(buttonClass, className)}>
          {isMuted || volume == 0 ? (
            <MuteIcon className={cn(IconMute, className)} />
          ) : volume < 0.5 ? (
            <VolumeLowIcon className={cn(IconVolumeLow, className)} />
          ) : (
            <VolumeHighIcon className={cn(IconVolumeHigh, className)} />
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

/**
 * Renders a Caption component.
 *
 * @param {number} tooltipOffset - The offset for the tooltip (default: 0).
 * @param {string} tooltipSide - The side of the tooltip (default: "top").
 * @param {string} tooltipAlign - The alignment of the tooltip (default: "center").
 * @param {string} className - Additional CSS classes to apply to the component.
 * @return {JSX.Element} The rendered Caption component.
 */

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

/**
 * Renders a PIP (Picture-in-Picture) button component.
 *
 * @param {number} tooltipOffset - The offset of the tooltip.
 * @param {string} tooltipSide - The side position of the tooltip (top, right, bottom, left).
 * @param {string} tooltipAlign - The alignment of the tooltip (center, start, end).
 * @param {string} className - Additional CSS class names for styling the component.
 * @returns {JSX.Element} The PIP button component.
 */

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

interface FullscreenProps extends MediaButtonProps {
  IconFullscreenExit?: string;
  IconFullscreen?: string;
}

/**
 * Renders a fullscreen button with a tooltip.
 *
 * @param {number} tooltipOffset - The offset of the tooltip.
 * @param {string} tooltipSide - The side of the tooltip.
 * @param {string} tooltipAlign - The alignment of the tooltip.
 * @param {string} className - Additional CSS class names for the button.
 * @param {string} IconFullscreenExit - The CSS class for the fullscreen exit icon.
 * @param {string} IconFullscreen - The CSS class for the fullscreen icon.
 * @return {ReactElement} The rendered fullscreen button with tooltip.
 */

export function Fullscreen({
  tooltipOffset = 0,
  tooltipSide = "top",
  tooltipAlign = "center",
  className,
  IconFullscreenExit = "w-5 h-5 text-primary",
  IconFullscreen = "w-5 h-5 text-primary",
}: FullscreenProps) {
  const isActive = useMediaState("fullscreen");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <FullscreenButton className={cn(buttonClass, className)}>
          {isActive ? (
            <FullscreenExitIcon className={cn(IconFullscreenExit, className)} />
          ) : (
            <FullscreenIcon className={cn(IconFullscreen, className)} />
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
