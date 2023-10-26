import React from "react";
import VAlertCenterNav from "./v-alert-center-nav";
import VAlertTab from "./v-alert-tab";

const VAlertCenter = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="mr-20">
        <VAlertCenterNav
          numberOfNotifications={100}
          numberOfMessages={10}
          numberOfEmails={20}
          numberOfPlans={30}
          numberOfAnnouncements={40}
        />
      </div>
      <div className="flex justify-start">
        <VAlertTab
          numberOfVverseNotifications={120}
          numberOfVguideNotifications={40}
          numberOfVblogNotifications={50}
          numberOfVnationNotifications={8}
          numberOfVtubeNotifications={28}
          numberOfVjobsNotifications={76}
          numberOfVlanceNotifications={67}
          numberOfVcollegeNotifications={66}
          numberOfVmarketNotifications={43}
          numberOfVeventsNotifications={21}
          numberOfVwebinarsNotifications={1}
          numberOfVexpertsNotifications={2}
        />
      </div>
    </div>
  );
};

export default VAlertCenter;
