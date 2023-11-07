"use client";

import React, { useState } from "react";
import VAlertNav from "@/components/alert-center/v-alert-nav";
import {
  vEmailsTotal,
  vMessagesTotal,
  vNewsTotal,
  vNotifcationsTotal,
  vPlannerTotals,
} from "@/components/alert-center/alert-badge-constants";
import { ButtonKey, VisitedButtons } from "@/lib/types";

import { VAlertCenterData } from "@/backend-data-test";
import VAlertNotifications from "./alert-tables/v-alert-notifications/v-alert-notifications";
import VAlertMessagesTable from "./alert-tables/v-alert-messages/v-alert-messages-table";
import VAlertEmailsTable from "./alert-tables/v-alert-emails/v-alert-emails-table";
import VAlertPlanner from "./alert-tables/v-alert-planner/v-alert-planner";
import VAlertNewsTable from "./alert-tables/v-alert-news/v-alert-news-table";

// starting point, check why sometimes only, tab badges go invisible after changing buttons. Might be from cache.
/**
 * Renders the VAlertCenter component.
 *
 * @return {ReactNode} The rendered component.
 */

const VAlertCenter: React.FC = () => {
  const [activeButton, setActiveButton] = useState<ButtonKey>("Notifications");
  const [visitedButtons, setVisitedButtons] = useState<VisitedButtons>({});

  const [activeNotifcationTab, setActiveNotificationTab] = useState("vVerse");
  const [visitedTabs, setVisitedTabs] = useState<Record<string, boolean>>({});
// check for context manager for state props instead. 
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
          visitedTabs={visitedTabs}
          setVisitedTabs={setVisitedTabs}
        />
      )}
      {activeButton === "Messages" && (
        <VAlertMessagesTable messageData={VAlertCenterData.Messages} />
      )}
      {activeButton === "Emails" && (
        <VAlertEmailsTable emailData={VAlertCenterData.Emails} />
      )}
      {activeButton === "Planner" && (
        <VAlertPlanner
          visitedTabs={visitedTabs}
          setVisitedTabs={setVisitedTabs}
          tabsData={VAlertCenterData.Planner}
          activeTab={activeNotifcationTab}
          setActiveTab={setActiveNotificationTab}
        />
      )}
      {activeButton === "News" && (
        <VAlertNewsTable newsData={VAlertCenterData.News} />
      )}
    </div>
  );
};

export default VAlertCenter;
