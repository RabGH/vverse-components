import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import VAlertNotificationCard from "./v-alert-notifications-card";
import { NotificationItem } from "@/lib/types";

type VAlertNotificationTableProps = {
  notificationData: NotificationItem[];
};

/**
 * Renders a table component for displaying alert notifications.
 *
 * @param {VAlertNotificationTableProps} notificationData - The data containing the alert notifications.
 * @return {React.Element} The rendered table component.
 */

const VAlertNotificationTable: React.FC<VAlertNotificationTableProps> = ({
  notificationData,
}) => {
  const isEmpty = notificationData.length === 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px]">
        {isEmpty ? (
          <p className="text-muted font-normal text-2xl items-center justify-center h-full w-full">
            No Notifications to show at this time.
          </p>
        ) : (
          notificationData.map((item) => (
            <VAlertNotificationCard key={item.id} notification={item} />
          ))
        )}
      </ScrollArea>
    </div>
  );
};

export default VAlertNotificationTable;
