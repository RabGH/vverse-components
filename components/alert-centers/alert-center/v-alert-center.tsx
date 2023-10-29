"use client";

import React, { useState } from "react";
import VAlertNav from "./v-alert-nav";
import {
  vEmailsTotal,
  vMessagesTotal,
  vNewsTotal,
  vNotifcationsTotal,
  vPlannerTotals,
} from "./alert-badge-constants";
import { ButtonKey, NotificationTabKey, VisitedButtons } from "@/lib/types";

import { VAlertCenterData } from "@/backend-data-test";
import VAlertNotifications from "./alert-tables/v-alert-notifications/v-alert-notifications";
import VAlertMessagesTable from "./alert-tables/v-alert-messages/v-alert-messages-table";
import VAlertEmailsTable from "./alert-tables/v-alert-emails/v-alert-emails-table";
import VAlertPlanner from "./alert-tables/v-alert-planner/v-alert-planner";
import VAlertNewsTable from "./alert-tables/v-alert-news/v-alert-news-table";

const VAlertCenter: React.FC = () => {
  const [activeButton, setActiveButton] = useState<ButtonKey>("Notifications");
  const [visitedButtons, setVisitedButtons] = useState<VisitedButtons>({
    Notifications: true,
  });
  const [activeNotifcationTab, setActiveNotificationTab] = useState("vVerse");
  const [visitedNotificationTabs, setVisitedNotificationTabs] = useState<
    Record<string, boolean>
  >({
    vVerse: true,
  });

  return (
    <div>
      <div className="mb-4">
        <VAlertNav
          numberOfNotifications={vNotifcationsTotal}
          numberOfMessages={vMessagesTotal}
          numberOfEmails={vEmailsTotal}
          numberOfPlans={vPlannerTotals}
          numberOfNews={vNewsTotal}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          visitedButtons={visitedButtons}
          setVisitedButtons={setVisitedButtons}
        />
      </div>
      {activeButton === "Notifications" && (
        <VAlertNotifications
          activeTab={activeNotifcationTab}
          setActiveTab={setActiveNotificationTab}
          tabsData={VAlertCenterData.Notifications}
          visitedTabs={visitedNotificationTabs}
          setVisitedTabs={setVisitedNotificationTabs}
        />
      )}
      {activeButton === "Messages" && (
        <VAlertMessagesTable messageData={VAlertCenterData.Messages} />
      )}
      {activeButton === "Emails" && (
        <VAlertEmailsTable emailData={VAlertCenterData.Emails} />
      )}
      {activeButton === "Planner" && (
        <VAlertPlanner tabsData={VAlertCenterData.Planner} />
      )}
      {activeButton === "News" && (
        <VAlertNewsTable newsData={VAlertCenterData.News} />
      )}
    </div>
  );
};

export default VAlertCenter;
