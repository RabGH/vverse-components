import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IconBellOutline } from "@/components/icons/logo-icons";
import { X } from "lucide-react";
import { UserSmallAvatar } from "@/components/v-ui/user-small-avatar";

interface VAlertNotificationCard {
  isLoading?: boolean;
  
}

const VAlertNotificationCard = () => {
  return (
    <Card className="flex items-center px-4 py-2 shadow-md bg-gray-100 mt-2">
      <div className="flex flex-row justify-between items-center w-[1200px] h-16 max-w-full">
        <div className="flex flex-row items-center gap-4">
          <UserSmallAvatar />
          <p>{"<Member Name>"}</p>
          <p className="text-muted">Sent you a Connection Request</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button variant={"blueRedSlash"}>Accept</Button>
          <Button variant={"secondary"}>Decline</Button>
          <Badge variant={"profile"} size="label">
            15-Jan-2022 01:50 PM
          </Badge>
          <Separator className="h-6" orientation="vertical" />
          <IconBellOutline className="w-4 h-4 text-muted" />
          <Separator className="h-6" orientation="vertical" />
          <X className="w-4 h-4 text-muted" />
        </div>
      </div>
    </Card>
  );
};

export default VAlertNotificationCard;
