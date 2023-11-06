"use client";

import React, { useState } from "react";
import { Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IconBellOff, IconBellOutline } from "@/components/icons/logo-icons";
import { UserSmallAvatar } from "@/components/v-ui/user-small-avatar";
import { cn } from "@/lib/utils";
import { PlannerItem } from "@/lib/types";

type VAlertPlannerCardProps = {
  isLoading?: boolean;
  planner: PlannerItem;
};

const VAlertPlannerCard = ({ isLoading, planner }: VAlertPlannerCardProps) => {
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

  const statusColors: Record<string, string> = {
    High: "vgRed border border-red-500/30 font-normal",
    Medium: "vlMustardYellow border border-yellow-200/30 font-normal",
    Low: "vlOlive border border-green-200/30 font-normal",
  };

  const statusColor = statusColors[planner.status] || "text-black";

  const meetingTypeColors: Record<string, string> = {
    "Online Meetings": "vlPlum border border-brown-500/30 font-normal",
    "Offline Meetings": "vlOrange border font-normal",
    "Online Webinars": "vlHotPink border font-normal",
    "Offline Events": "vlSoftBrown border font-normal",
  };

  const meetingTypeColor =
    meetingTypeColors[planner.meetingType] || "text-black";

  const statusBadge = (
    <Badge variant={"default"} size="md" className={cn(statusColor)}>
      {planner.status}
    </Badge>
  );

  const meetingTypeBadge = (
    <Badge variant={"default"} size="md" className={cn(meetingTypeColor)}>
      {planner.meetingType}
    </Badge>
  );

  const mattersTypeBadge = (
    <Badge
      variant={"default"}
      size="md"
      className="vgBlue font-normal border border-blue-800/50"
    >
      {planner.matters}
    </Badge>
  );

  return (
    <Card
      data-disabled={isLoading}
      tabIndex={0}
      className={cn(
        `flex items-center px-4 py-2 shadow-md bg-gray-100 mt-2 hover:-translate-y-1 transition ease-in-out duration-300`
      )}
    >
      <div className="flex flex-row justify-between items-center w-[1200px] h-16 max-w-full">
        {isLoading ? (
          <Loader2 className="h-11 w-11 animate-spin" />
        ) : (
          <>
            <div className="flex flex-row items-center gap-4">
              <UserSmallAvatar />
              <div className="flex flex-col">
                <p className="text-black font-bold">{planner.title}</p>
                <p className="text-muted">{planner.endDate}</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-4">
              {/* <div className="flex flex-row justify-between gap-6"> */}
              {mattersTypeBadge}
              {meetingTypeBadge}
              {statusBadge}
              {/* </div> */}
              {planner.startDate && (
                <Badge variant="violet" size="label" className={cn("")}>
                  {planner.startDate}
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

export default VAlertPlannerCard;
