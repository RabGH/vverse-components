"use client"

import React, { useState } from "react";
import { Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IconBellOff, IconBellOutline } from "@/components/icons/logo-icons";
import { UserSmallAvatar } from "@/components/v-ui/user-small-avatar";
import { cn } from "@/lib/utils";
import { NotificationItem } from "@/lib/types";

type VAlertNotificationCardProps = {
  isLoading?: boolean;
  notification: NotificationItem;
};

/**
 * Renders a notification card for the VAlertNotification component.
 *
 * @param {Object} props - The props object containing isLoading and notification properties.
 * @param {boolean} props.isLoading - A boolean value indicating whether the card is in a loading state.
 * @param {Object} props.notification - An object containing the notification data.
 * @return {JSX.Element} - The rendered notification card component.
 */

const VAlertNotificationCard = ({
  isLoading,
  notification,
}: VAlertNotificationCardProps) => {
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
              <p className="text-black font-bold">{notification.user}</p>
              <p className="text-muted">{notification.title}</p>

              <p className="text-black font-bold">{"<Request>"}</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4">
              {notification.actions?.includes("accept") && (
                <Button
                  variant={"blueRedSlash"}
                  size="md"
                  onClick={handleAccept}
                >
                  Accept
                </Button>
              )}
              {notification.actions?.includes("decline") && (
                <Button
                  variant={"secondary"}
                  size="md"
                  onClick={closeNotification}
                >
                  Decline
                </Button>
              )}
              {notification.actions?.includes("viewReport") && (
                <Button variant={"blueRedSlash"} size="sm">
                  View Report
                </Button>
              )}
              {notification.date && (
                <Badge variant="violet" size="label" className={cn("")}>
                  {notification.date}
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
