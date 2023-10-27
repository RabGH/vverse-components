"use client";

import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import VAlertTable from "./v-alert-table";
import VAlertNav from "./v-alert-nav";

import { backendData } from "@/backend-data-test";

interface VAlertTabProps {}
type TabKey =
  | "vVerse"
  | "vGuide"
  | "vBlog"
  | "vNation"
  | "vTube"
  | "vJobs"
  | "vLance"
  | "vCollege"
  | "vMarket"
  | "vEvents"
  | "vWebinars"
  | "vExperts";

const VAlertTab = ({}: VAlertTabProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("vVerse");
  const [activeButton, setActiveButton] = useState("Notifications");
  const [visitedTabs, setVisitedTabs] = useState<Record<string, boolean>>({
    vVerse: true,
  });

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

  const vVerseTotal =
    backendData.vVerse.Notifications.length +
    backendData.vVerse.Messages.length +
    backendData.vVerse.Emails.length +
    backendData.vVerse.Planner.length +
    backendData.vVerse.Announcements.length;
  const vGuideTotal =
    backendData.vGuide.Notifications.length +
    backendData.vGuide.Messages.length +
    backendData.vGuide.Emails.length +
    backendData.vGuide.Planner.length +
    backendData.vGuide.Announcements.length;
  const vBlogTotal =
    backendData.vBlog.Notifications.length +
    backendData.vBlog.Messages.length +
    backendData.vBlog.Emails.length +
    backendData.vBlog.Planner.length +
    backendData.vBlog.Announcements.length;
  const vNationTotal =
    backendData.vNation.Notifications.length +
    backendData.vNation.Messages.length +
    backendData.vNation.Emails.length +
    backendData.vNation.Planner.length +
    backendData.vNation.Announcements.length;
  const vTubeTotal =
    backendData.vTube.Notifications.length +
    backendData.vTube.Messages.length +
    backendData.vTube.Emails.length +
    backendData.vTube.Planner.length +
    backendData.vTube.Announcements.length;
  const vJobsTotal =
    backendData.vJobs.Notifications.length +
    backendData.vJobs.Messages.length +
    backendData.vJobs.Emails.length +
    backendData.vJobs.Planner.length +
    backendData.vJobs.Announcements.length;
  const vLanceTotal =
    backendData.vLance.Notifications.length +
    backendData.vLance.Messages.length +
    backendData.vLance.Emails.length +
    backendData.vLance.Planner.length +
    backendData.vLance.Announcements.length;
  const vCollegeTotal =
    backendData.vCollege.Notifications.length +
    backendData.vCollege.Messages.length +
    backendData.vCollege.Emails.length +
    backendData.vCollege.Planner.length +
    backendData.vCollege.Announcements.length;
  const vMarketTotal =
    backendData.vMarket.Notifications.length +
    backendData.vMarket.Messages.length +
    backendData.vMarket.Emails.length +
    backendData.vMarket.Planner.length +
    backendData.vMarket.Announcements.length;
  const vEventsTotal =
    backendData.vEvents.Notifications.length +
    backendData.vEvents.Messages.length +
    backendData.vEvents.Emails.length +
    backendData.vEvents.Planner.length +
    backendData.vEvents.Announcements.length;
  const vWebinarsTotal =
    backendData.vWebinars.Notifications.length +
    backendData.vWebinars.Messages.length +
    backendData.vWebinars.Emails.length +
    backendData.vWebinars.Planner.length +
    backendData.vWebinars.Announcements.length;
  const vExpertsTotal =
    backendData.vExperts.Notifications.length +
    backendData.vExperts.Messages.length +
    backendData.vExperts.Emails.length +
    backendData.vExperts.Planner.length +
    backendData.vExperts.Announcements.length;

  const badgeData = {
    vVerse: {
      Notifications: backendData.vVerse.Notifications.length,
      Messages: backendData.vVerse.Messages.length,
      Emails: backendData.vVerse.Emails.length,
      Planner: backendData.vVerse.Planner.length,
      Announcements: backendData.vVerse.Announcements.length,
    },
    vGuide: {
      Notifications: backendData.vGuide.Notifications.length,
      Messages: backendData.vGuide.Messages.length,
      Emails: backendData.vGuide.Emails.length,
      Planner: backendData.vGuide.Planner.length,
      Announcements: backendData.vGuide.Announcements.length,
    },
    vBlog: {
      Notifications: backendData.vBlog.Notifications.length,
      Messages: backendData.vBlog.Messages.length,
      Emails: backendData.vBlog.Emails.length,
      Planner: backendData.vBlog.Planner.length,
      Announcements: backendData.vBlog.Announcements.length,
    },
    vNation: {
      Notifications: backendData.vNation.Notifications.length,
      Messages: backendData.vNation.Messages.length,
      Emails: backendData.vNation.Emails.length,
      Planner: backendData.vNation.Planner.length,
      Announcements: backendData.vNation.Announcements.length,
    },
    vTube: {
      Notifications: backendData.vTube.Notifications.length,
      Messages: backendData.vTube.Messages.length,
      Emails: backendData.vTube.Emails.length,
      Planner: backendData.vTube.Planner.length,
      Announcements: backendData.vTube.Announcements.length,
    },
    vJobs: {
      Notifications: backendData.vJobs.Notifications.length,
      Messages: backendData.vJobs.Messages.length,
      Emails: backendData.vJobs.Emails.length,
      Planner: backendData.vJobs.Planner.length,
      Announcements: backendData.vJobs.Announcements.length,
    },
    vLance: {
      Notifications: backendData.vLance.Notifications.length,
      Messages: backendData.vLance.Messages.length,
      Emails: backendData.vLance.Emails.length,
      Planner: backendData.vLance.Planner.length,
      Announcements: backendData.vLance.Announcements.length,
    },
    vCollege: {
      Notifications: backendData.vCollege.Notifications.length,
      Messages: backendData.vCollege.Messages.length,
      Emails: backendData.vCollege.Emails.length,
      Planner: backendData.vCollege.Planner.length,
      Announcements: backendData.vCollege.Announcements.length,
    },
    vMarket: {
      Notifications: backendData.vMarket.Notifications.length,
      Messages: backendData.vMarket.Messages.length,
      Emails: backendData.vMarket.Emails.length,
      Planner: backendData.vMarket.Planner.length,
      Announcements: backendData.vMarket.Announcements.length,
    },
    vEvents: {
      Notifications: backendData.vEvents.Notifications.length,
      Messages: backendData.vEvents.Messages.length,
      Emails: backendData.vEvents.Emails.length,
      Planner: backendData.vEvents.Planner.length,
      Announcements: backendData.vEvents.Announcements.length,
    },
    vWebinars: {
      Notifications: backendData.vWebinars.Notifications.length,
      Messages: backendData.vWebinars.Messages.length,
      Emails: backendData.vWebinars.Emails.length,
      Planner: backendData.vWebinars.Planner.length,
      Announcements: backendData.vWebinars.Announcements.length,
    },
    vExperts: {
      Notifications: backendData.vExperts.Notifications.length,
      Messages: backendData.vExperts.Messages.length,
      Emails: backendData.vExperts.Emails.length,
      Planner: backendData.vExperts.Planner.length,
      Announcements: backendData.vExperts.Announcements.length,
    },
  };

  const getBadgeStyles = (tabs: TabKey, count: number) => {
    return cn(
      "border font-normal w-9 h-9",
      activeTab === tabs
        ? "bg-transparent group group-hover:vgWhite group-hover:text-primary border-background"
        : "bg-gray-100 border border-gray-300 text-muted group-hover:bg-background",
      count > 0 && !isTabVisited(tabs)
        ? "vgRed text-background border-red-400/50 group-hover:bg-background"
        : ""
    );
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    markTabAsVisited(tab);
  };

  const handleButtonChange = (button: string) => {
    setActiveButton(button);
  };

  const markTabAsVisited = (tab: TabKey) => {
    setVisitedTabs((prevVisitedTabs) => ({
      ...prevVisitedTabs,
      [tab]: true,
    }));
  };

  const isTabVisited = (button: string) => visitedTabs[button];

  return (
    <>
      <div>
        <VAlertNav
          numberOfNotifications={badgeData[activeTab].Notifications}
          numberOfMessages={badgeData[activeTab].Messages}
          numberOfEmails={badgeData[activeTab].Emails}
          numberOfPlans={badgeData[activeTab].Planner}
          numberOfAnnouncements={badgeData[activeTab].Announcements}
          currentTabAndButton={{
            tab: activeTab,
            button: activeButton,
          }}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      <Tabs
        defaultValue="vVerse"
        className="w-64 shadow-md h-full flex"
        orientation="vertical"
      >
        <TabsList className="flex flex-col justify-center items-center">
          <TabsTrigger
            value="vVerse"
            className={getTabTriggerStyles("vVerse")}
            onClick={() => handleTabChange("vVerse")}
          >
            V-Verse Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vVerse", vVerseTotal)}
            >
              {vVerseTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vGuide"
            className={getTabTriggerStyles("vGuide")}
            onClick={() => handleTabChange("vGuide")}
          >
            V-Guide Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vGuide", vGuideTotal)}
            >
              {vGuideTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vBlog"
            className={getTabTriggerStyles("vBlog")}
            onClick={() => handleTabChange("vBlog")}
          >
            V-Blog Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vBlog", vBlogTotal)}
            >
              {vBlogTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vNation"
            className={getTabTriggerStyles("vNation")}
            onClick={() => handleTabChange("vNation")}
          >
            V-Nation Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vNation", vNationTotal)}
            >
              {vNationTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vTube"
            className={getTabTriggerStyles("vTube")}
            onClick={() => handleTabChange("vTube")}
          >
            V-Tube Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vTube", vTubeTotal)}
            >
              {vTubeTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vJobs"
            className={getTabTriggerStyles("vJobs")}
            onClick={() => handleTabChange("vJobs")}
          >
            V-Jobs Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vJobs", vJobsTotal)}
            >
              {vJobsTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vLance"
            className={getTabTriggerStyles("vLance")}
            onClick={() => handleTabChange("vLance")}
          >
            V-Lance Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vLance", vLanceTotal)}
            >
              {vLanceTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vCollege"
            className={getTabTriggerStyles("vCollege")}
            onClick={() => handleTabChange("vCollege")}
          >
            V-College Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vCollege", vCollegeTotal)}
            >
              {vCollegeTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vMarket"
            className={getTabTriggerStyles("vMarket")}
            onClick={() => handleTabChange("vMarket")}
          >
            V-Market Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vMarket", vMarketTotal)}
            >
              {vMarketTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vEvents"
            className={getTabTriggerStyles("vEvents")}
            onClick={() => handleTabChange("vEvents")}
          >
            V-Events Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vEvents", vEventsTotal)}
            >
              {vEventsTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vWebinars"
            className={getTabTriggerStyles("vWebinars")}
            onClick={() => handleTabChange("vWebinars")}
          >
            V-Webinars Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vWebinars", vWebinarsTotal)}
            >
              {vWebinarsTotal}
            </Badge>
          </TabsTrigger>
          <Separator />
          <TabsTrigger
            value="vExperts"
            className={getTabTriggerStyles("vExperts")}
            onClick={() => handleTabChange("vExperts")}
          >
            V-Experts Notifications
            <Badge
              size="numberTag"
              className={getBadgeStyles("vExperts", vExpertsTotal)}
            >
              {vExpertsTotal}
            </Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="vVerse" className={getTabContentStyles("vVerse")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vVerse",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent value="vGuide" className={getTabContentStyles("vGuide")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vGuide",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent value="vBlog" className={getTabContentStyles("vBlog")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vBlog",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent value="vNation" className={getTabContentStyles("vNation")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vNation",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent value="vTube" className={getTabContentStyles("vTube")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vTube",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent value="vJobs" className={getTabContentStyles("vJobs")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vJobs",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent value="vLance" className={getTabContentStyles("vLance")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vLance",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent
          value="vCollege"
          className={getTabContentStyles("vCollege")}
        >
          <VAlertTable
            currentTabAndButton={{
              tab: "vCollege",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent value="vMarket" className={getTabContentStyles("vMarket")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vMarket",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent value="vEvents" className={getTabContentStyles("vEvents")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vEvents",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent
          value="vWebinars"
          className={getTabContentStyles("vWebinars")}
        >
          <VAlertTable
            currentTabAndButton={{
              tab: "vWebinars",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
        <TabsContent
          value="vExperts"
          className={getTabContentStyles("vExperts")}
        >
          <VAlertTable
            currentTabAndButton={{
              tab: "vExperts",
              button: activeButton,
            }}
            backendData={backendData}
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default VAlertTab;
