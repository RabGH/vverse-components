import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import VAlertNotificationCard from "./v-alert-notifications-card";
import { NotificationItem } from "@/lib/types";

type VAlertNotificationTableProps = {
  notificationData: NotificationItem[];
};

const VAlertNotificationTable: React.FC<VAlertNotificationTableProps> = ({
  notificationData,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px]">
        {notificationData.map((item) => (
          <VAlertNotificationCard key={item.id} notification={item} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default VAlertNotificationTable;
