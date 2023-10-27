import React, { useState } from "react";
import { Loader2, X } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IconBellOff, IconBellOutline } from "@/components/icons/logo-icons";
import { UserSmallAvatar } from "@/components/v-ui/user-small-avatar";
import { cn } from "@/lib/utils";

interface VAlertNotificationCardProps {
  isLoading?: boolean;
  isReplied?: boolean;
  isFollowing?: boolean;
  isComment?: boolean;
  isJoined?: boolean;
  isShared?: boolean;
  isRequested?: boolean;
  isReport?: boolean;
  isLiked?: boolean;
  isMuted?: boolean;
  isOld?: boolean;
  groupName?: string;
  pageName?: string;
  dateOfNotification?: string;
  id: number;
  user: string;
  actions?: string[];
  title: string;
}

const VAlertNotificationCard = ({
  isLoading,
  isReplied,
  user,
  isFollowing,
  isComment,
  isJoined,
  isShared,
  isRequested,
  isReport,
  isLiked,
  isOld,
  dateOfNotification,
  groupName,
  pageName,
  id,
  title,
  actions,
}: VAlertNotificationCardProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

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

  return (
    <Card
      data-disabled={isLoading}
      tabIndex={0}
      className={cn(`flex items-center px-4 py-2 shadow-md bg-gray-100 mt-2`)}
    >
      <div className="flex flex-row justify-between items-center w-[1200px] h-16 max-w-full">
        {isLoading ? (
          <Loader2 className="h-11 w-11 animate-spin" />
        ) : (
          <>
            <div className="flex flex-row items-center gap-4">
              <UserSmallAvatar />
              <p>{id}</p>
              <p>{user}</p>
              <p>{title}</p>
              {isRequested ? (
                <p className="text-muted">Sent You a Connection Request</p>
              ) : isReplied ? (
                <p className="text-muted">Replied to Your comment.</p>
              ) : isComment ? (
                <p className="text-muted">Commented on Your post</p>
              ) : isShared ? (
                <p className="text-muted">Shared Your post</p>
              ) : isReport ? (
                <p className="text-muted">Reported Your profile</p>
              ) : isFollowing ? (
                <p className="text-muted">
                  Started to Follow{" "}
                  <span className="font-bold text-black">Your</span> {pageName}
                </p>
              ) : isJoined ? (
                <p className="text-muted">Joined Your {groupName}</p>
              ) : isLiked ? (
                <p className="text-muted">
                  {user}, Liked Your{" "}
                  <span className="font-bold text-black">Post</span>
                </p>
              ) : (
                <p className="text-muted">Notification Demo</p>
              )}
            </div>
            <div className="flex flex-row items-center gap-2">
              {actions?.includes("accept") && (
                <Button variant={"blueRedSlash"}>Accept</Button>
              )}
              {actions?.includes("decline") && (
                <Button variant={"secondary"}>Decline</Button>
              )}
              {actions?.includes("viewReport") && (
                <Button variant={"blueRedSlash"}>View Report</Button>
              )}

              {dateOfNotification && (
                <Badge
                  variant={"profile"}
                  size="label"
                  className={cn(isOld ? "text-muted" : "")}
                >
                  {dateOfNotification}
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

export default VAlertNotificationCard;
