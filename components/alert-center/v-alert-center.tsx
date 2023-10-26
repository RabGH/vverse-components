import React from "react";
import VAlertCenterNav from "./v-alert-center-nav";

const VAlertCenter = () => {
  return (
    <div>
      <VAlertCenterNav
        numberOfNotifications={100}
        numberOfMessages={10}
        numberOfEmails={20}
        numberOfPlans={30}
        numberOfAnnouncements={40}
      />
    </div>
  );
};

export default VAlertCenter;
