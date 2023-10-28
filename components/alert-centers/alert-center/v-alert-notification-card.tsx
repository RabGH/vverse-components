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

type VAlertNotificationCardProps = {
  isLoading?: boolean;
  isOld?: boolean;
  groupName?: string;
  pageName?: string;
  dateOfNotification?: string;
  id: number;
  user?: string;
  actions?: string[];
  title: string;
  buttonType?: string;
  fromPillar?: string;
  type?: string;
};

const VAlertNotificationCard = ({
  isLoading,
  user,
  isOld,
  dateOfNotification,
  groupName,
  pageName,
  id,
  title,
  actions,
  buttonType,
  fromPillar,
  type,
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
              <p className="text-black font-bold">{user}</p>
              <p className="text-muted">{title}</p>

              <p className="text-black font-bold">{"<Request>"}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              {actions?.includes("accept") && (
                <Button variant={"blueRedSlash"} onClick={handleAccept}>
                  Accept
                </Button>
              )}
              {actions?.includes("decline") && (
                <Button variant={"secondary"} onClick={closeNotification}>
                  Decline
                </Button>
              )}
              {actions?.includes("viewReport") && (
                <Button variant={"blueRedSlash"}>View Report</Button>
              )}
              <p className="text-black font-bold">{user}</p>
              {buttonType === "Notifications" && (
                <>
                  <p className="text-muted">{title}</p>
                  <p className="text-black font-bold">{"<Request>"}</p>
                </>
              )}
              {buttonType === "Messages" && (
                <>
                  <p className="text-muted">Sent You a Message</p>
                  <p className="text-black font-bold">{fromPillar}</p>
                </>
              )}
              {buttonType === "Emails" && (
                <>
                  <p className="text-muted">Sent You an Email</p>
                  <p className="text-black font-bold">{type}</p>
                </>
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
