"use client";

import React, { useState } from "react";
import { Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  IconBellOff,
  IconBellOutline,
  LogoVBlog,
  LogoVCollege,
  LogoVEvents,
  LogoVExpert,
  LogoVGuide,
  LogoVJobs,
  LogoVLance,
  LogoVMarket,
  LogoVNation,
  LogoVTube,
  LogoVWebinars,
  MainLogo,
} from "@/components/icons/logo-icons";
import { UserSmallAvatar } from "@/components/v-ui/user-small-avatar";
import { cn } from "@/lib/utils";
import { MessageItem } from "@/lib/types";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

type VAlertMessagesCardProps = {
  isLoading?: boolean;
  message: MessageItem;
};

const VAlertMessagesCard = ({
  isLoading,
  message,
}: VAlertMessagesCardProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const router = useRouter();

  // Function to handle the accept action
  const handleAccept = () => {
    router.push("/");
  };

  // Here you can make a call to your mute/unmute API
  const toggleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };

  // Here you can remove the notification from your list API
  const closeNotification = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  const pillarStyles: string = "w-32 h-9 text-white";

  const messagePillars: Record<
    string,
    React.ReactElement<SVGSVGElement, string | React.JSXElementConstructor<any>>
  > = {
    vVerse: <MainLogo className={"w-10"} />,
    vGuide: <LogoVGuide className={"text-white w-24"} />,
    vBlog: <LogoVBlog className={"text-white w-24"} />,
    vNation: <LogoVNation className={pillarStyles} />,
    vTube: <LogoVTube className={"text-white w-24"} />,
    vJobs: <LogoVJobs className={"text-white w-24"} />,
    vLance: <LogoVLance className={"text-white w-24"} />,
    vCollege: <LogoVCollege className={pillarStyles} />,
    vMarket: <LogoVMarket className={pillarStyles} />,
    vEvents: <LogoVEvents className={pillarStyles} />,
    vWebinars: <LogoVWebinars className={pillarStyles} />,
    vExperts: <LogoVExpert className={pillarStyles} />,
  };

  const messagePillar: React.ReactElement<SVGSVGElement> = messagePillars[
    message.fromPillar
  ] || <span>No Pillars available</span>;

  return (
    <Card
      data-disabled={isLoading}
      tabIndex={0}
      className={cn(
        `flex items-center px-4 py-2 shadow-md bg-gray-100 mt-2 hover:-translate-y-1 transition ease-in-out duration-300`
      )}
    >
      <div className="flex flex-row justify-between items-center w-[1450px] h-16 max-w-full">
        {isLoading ? (
          <Loader2 className="h-11 w-11 animate-spin" />
        ) : (
          <>
            <div className="flex flex-row items-center gap-4">
              <UserSmallAvatar />
              <div className="flex flex-col">
                <p className="text-black font-bold">{message.user}</p>
                <p className="text-primary">{message.title}</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-4">
              {messagePillar}
              {message.date && (
                <Badge variant="violet" size="label" className={cn("")}>
                  {message.date}
                </Badge>
              )}

              <Separator className="h-6" orientation="vertical" />

              <div className="cursor-pointer" onClick={toggleMute}>
                {isMuted ? (
                  <IconBellOutline className="w-4 h-4 text-muted transform hover:scale-105 transition-transform" />
                ) : (
                  <IconBellOff className="w-4 h-4 text-muted transform hover:scale-105 transition-transform" />
                )}
              </div>

              <Separator className="h-6" orientation="vertical" />
              <X
                onClick={closeNotification}
                className="w-4 h-4 text-muted cursor-pointer"
              />
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

export default VAlertMessagesCard;
