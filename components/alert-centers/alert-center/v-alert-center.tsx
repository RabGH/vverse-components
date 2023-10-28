"use client";

import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import VAlertTable from "./v-alert-table";
import VAlertNav from "./v-alert-nav";
import {
  badgeNotificationsTabData,
  buttons,
  defaultVisitedTabs,
  notificationTabs,
  plannerTabs,
  vEmailsTotal,
  vMessagesTotal,
  vNewsTotal,
  vNotifcationsTotal,
  vPlannerTotals,
} from "./alert-badge-constants";
import {
  ButtonKey,
  PlannerTabKey,
  NotificationTabKey,
  VisitedTabs,
  VAlertCenterData as data,
  TabKey,
} from "@/lib/types";

import { VAlertCenterData } from "@/backend-data-test";

const VAlertCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("vVerse");
  const [activeButton, setActiveButton] = useState<ButtonKey>("Notifications");
  const [visitedTabs, setVisitedTabs] = useState<VisitedTabs>({
    ...defaultVisitedTabs,
  });

  const isButtonFullyVisited = (button: ButtonKey) => {
    let tabs: TabKey[];
    if (button === "Notifications") {
      tabs = notificationTabs;
    } else if (button === "Planner") {
      tabs = plannerTabs;
    } else {
      return true;
    }
  };

  const getTabContentStyles = (tab: TabKey) => {
    return cn("mt-0");
  };

  const getTabTriggerStyles = (tab: TabKey) => {
    return cn(
      `h-14 hover:bg-hoverBlue w-64 hover:text-white text-muted justify-between gap-6 
data-[state=active]:vgBlue hover:border-blue-400/50 hover:border`,
      activeTab === tab ? "" : ""
    );
  };

  const getBadgeStyles = (tab: TabKey, count: number, button: ButtonKey) => {
    return cn(
      "border font-normal w-9 h-9",
      activeTab === tab
        ? "bg-transparent group group-hover:vgWhite group-hover:text-primary border-background"
        : "bg-gray-100 border border-gray-300 text-muted group-hover:bg-background",
      count > 0 && !isButtonFullyVisited(button)
        ? "vgRed text-background border-red-400/50 group-hover:bg-background"
        : ""
    );
  };

  const markTabAndButtonAsVisited = (tab: TabKey, button: ButtonKey) => {
    setVisitedTabs((prevVisitedTabs) => {
      return Object.assign({}, prevVisitedTabs, {
        [button]: Object.assign({}, prevVisitedTabs[button], {
          [tab]: true,
        }),
      });
    });
  };

  const handleTabChange = (tab: TabKey, activeButton: ButtonKey) => {
    setActiveTab(tab);
    markTabAndButtonAsVisited(tab, activeButton);
  };

  const handleButtonChange = (button: ButtonKey) => {
    setActiveButton(button);
    markTabAndButtonAsVisited(activeTab, button);
  };

  return (
    <div>
      <div className="mb-4">
        <VAlertNav
          numberOfNotifications={vNotifcationsTotal}
          numberOfMessages={vMessagesTotal}
          numberOfEmails={vEmailsTotal}
          numberOfPlans={vPlannerTotals}
          numberOfNews={vNewsTotal}
          currentTabAndButton={{
            tab: activeTab,
            button: activeButton,
          }}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          visitedTabs={visitedTabs}
          handleButtonChange={handleButtonChange}
        />
      </div>
      {activeButton === "Notifications" && (
        <Tabs
          defaultValue="vVerse"
          className="w-64 shadow-md h-full flex"
          orientation="vertical"
        >
          <TabsList className="flex flex-col justify-center items-center">
            <TabsTrigger
              value="vVerse"
              className={getTabTriggerStyles("vVerse")}
              onClick={() => handleTabChange("vVerse", "Notifications")}
            >
              V-Verse Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vVerse",
                  badgeNotificationsTabData.Notifications.vVerse,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vVerse}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vGuide"
              className={getTabTriggerStyles("vGuide")}
              onClick={() => handleTabChange("vGuide", "Notifications")}
            >
              V-Guide Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vGuide",
                  badgeNotificationsTabData.Notifications.vGuide,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vGuide}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vBlog"
              className={getTabTriggerStyles("vBlog")}
              onClick={() => handleTabChange("vBlog", "Notifications")}
            >
              V-Blog Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vBlog",
                  badgeNotificationsTabData.Notifications.vBlog,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vBlog}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vNation"
              className={getTabTriggerStyles("vNation")}
              onClick={() => handleTabChange("vNation", "Notifications")}
            >
              V-Nation Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vNation",
                  badgeNotificationsTabData.Notifications.vNation,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vNation}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vTube"
              className={getTabTriggerStyles("vTube")}
              onClick={() => handleTabChange("vTube", "Notifications")}
            >
              V-Tube Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vTube",
                  badgeNotificationsTabData.Notifications.vTube,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vTube}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vJobs"
              className={getTabTriggerStyles("vJobs")}
              onClick={() => handleTabChange("vJobs", "Notifications")}
            >
              V-Jobs Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vJobs",
                  badgeNotificationsTabData.Notifications.vJobs,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vJobs}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vLance"
              className={getTabTriggerStyles("vLance")}
              onClick={() => handleTabChange("vLance", "Notifications")}
            >
              V-Lance Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vLance",
                  badgeNotificationsTabData.Notifications.vLance,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vLance}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vCollege"
              className={getTabTriggerStyles("vCollege")}
              onClick={() => handleTabChange("vCollege", "Notifications")}
            >
              V-College Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vCollege",
                  badgeNotificationsTabData.Notifications.vCollege,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vCollege}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vMarket"
              className={getTabTriggerStyles("vMarket")}
              onClick={() => handleTabChange("vMarket", "Notifications")}
            >
              V-Market Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vMarket",
                  badgeNotificationsTabData.Notifications.vMarket,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vMarket}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vEvents"
              className={getTabTriggerStyles("vEvents")}
              onClick={() => handleTabChange("vEvents", "Notifications")}
            >
              V-Events Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vEvents",
                  badgeNotificationsTabData.Notifications.vEvents,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vEvents}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vWebinars"
              className={getTabTriggerStyles("vWebinars")}
              onClick={() => handleTabChange("vWebinars", "Notifications")}
            >
              V-Webinars Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vWebinars",
                  badgeNotificationsTabData.Notifications.vWebinars,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vWebinars}
              </Badge>
            </TabsTrigger>
            <Separator />
            <TabsTrigger
              value="vExperts"
              className={getTabTriggerStyles("vExperts")}
              onClick={() => handleTabChange("vExperts", "Notifications")}
            >
              V-Experts Notifications
              <Badge
                size="numberTag"
                className={getBadgeStyles(
                  "vExperts",
                  badgeNotificationsTabData.Notifications.vExperts,
                  "Notifications"
                )}
              >
                {badgeNotificationsTabData.Notifications.vExperts}
              </Badge>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="vVerse" className={getTabContentStyles("vVerse")}>
            <VAlertTable
              currentTabAndButton={{
                tab: "vVerse",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent value="vGuide" className={getTabContentStyles("vGuide")}>
            <VAlertTable
              currentTabAndButton={{
                tab: "vGuide",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent value="vBlog" className={getTabContentStyles("vBlog")}>
            <VAlertTable
              currentTabAndButton={{
                tab: "vBlog",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent
            value="vNation"
            className={getTabContentStyles("vNation")}
          >
            <VAlertTable
              currentTabAndButton={{
                tab: "vNation",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent value="vTube" className={getTabContentStyles("vTube")}>
            <VAlertTable
              currentTabAndButton={{
                tab: "vTube",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent value="vJobs" className={getTabContentStyles("vJobs")}>
            <VAlertTable
              currentTabAndButton={{
                tab: "vJobs",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent value="vLance" className={getTabContentStyles("vLance")}>
            <VAlertTable
              currentTabAndButton={{
                tab: "vLance",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent
            value="vCollege"
            className={getTabContentStyles("vCollege")}
          >
            <VAlertTable
              currentTabAndButton={{
                tab: "vCollege",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent
            value="vMarket"
            className={getTabContentStyles("vMarket")}
          >
            <VAlertTable
              currentTabAndButton={{
                tab: "vMarket",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent
            value="vEvents"
            className={getTabContentStyles("vEvents")}
          >
            <VAlertTable
              currentTabAndButton={{
                tab: "vEvents",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent
            value="vWebinars"
            className={getTabContentStyles("vWebinars")}
          >
            <VAlertTable
              currentTabAndButton={{
                tab: "vWebinars",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
          <TabsContent
            value="vExperts"
            className={getTabContentStyles("vExperts")}
          >
            <VAlertTable
              currentTabAndButton={{
                tab: "vExperts",
                button: "Notifications",
              }}
              VAlertCenterData={VAlertCenterData}
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default VAlertCenter;
