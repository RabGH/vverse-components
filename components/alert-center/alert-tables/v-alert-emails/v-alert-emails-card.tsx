"use client"

import React, { useState } from "react";
import { Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  IconBellOff,
  IconBellOutline,
  IconMail,
} from "@/components/icons/logo-icons";
import { UserSmallAvatar } from "@/components/v-ui/user-small-avatar";
import { cn } from "@/lib/utils";
import { EmailItem } from "@/lib/types";

type VAlertEmailsCardProps = {
  isLoading?: boolean;
  emails: EmailItem;
};

const VAlertEmailsCard = ({ isLoading, emails }: VAlertEmailsCardProps) => {
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

  const emailTypeColors: Record<string, string> = {
    vVerse: "vlMutedPurple border font-normal gap-2",
    Personal: "vlHotPink border font-normal gap-2",
    Business: "vlAqua border font-normal gap-2",
  };

  const emailTypeColor = emailTypeColors[emails.type] || "text-black";

  const emailTypeBadge = (
    <Badge variant={"default"} size="md" className={cn(emailTypeColor)}>
      <IconMail className="text-white w-4 h-4" />
      {emails.type}
    </Badge>
  );

  const circleStyles: string = `rounded-full flex items-center justify-center w-8 h-8 hover:vgBlue vgRed text-background`;

  return (
    <Card
      data-disabled={isLoading}
      tabIndex={0}
      className={cn(
        `flex items-center px-4 py-2 shadow-md bg-gray-100 mt-2 hover:-translate-y-1 transition ease-in-out duration-300`
      )}
    >
      <div className="flex flex-row justify-between items-center w-[1450px] h-22 max-w-full">
        {isLoading ? (
          <Loader2 className="h-11 w-11 animate-spin" />
        ) : (
          <>
            <div className="flex flex-row items-center gap-4">
              <UserSmallAvatar />
              <div className="flex flex-col ">
                <p className="text-black font-bold flex flex-row items-center justify-start gap-2">
                  {emails.senderName}{" "}
                  <div className={circleStyles}>{emails.numberOfMessages}</div>{" "}
                </p>
                <p className="text-black text-base">{emails.title}</p>
                <p className="text-base text-primary">{emails.subTitle}</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-4">
              {emailTypeBadge}
              {emails.date && (
                <Badge variant={"profile"} size="label" className={cn("")}>
                  {emails.date}
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

export default VAlertEmailsCard;
