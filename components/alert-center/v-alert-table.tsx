import React from "react";
import VAlertNotificationCard from "./v-alert-notification-card";

const VAlertTable = () => {
  return (
    <div className="flex flex-col max-w-full">
      <div className="max-h-[700px] overflow-y-auto rounded-lg">
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
        <VAlertNotificationCard />
      </div>
    </div>
  );
};

export default VAlertTable;
