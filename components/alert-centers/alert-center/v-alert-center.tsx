"use client";

import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import VAlertTable from "./v-alert-table";
import VAlertNav from "./v-alert-nav";

import { VAlertCenterData } from "@/backend-data-test";

interface VAlertCenterProps {}
type VisitedTabs = Record<string, Record<string, boolean>>;
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

const VAlertCenter = ({}: VAlertCenterProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("vVerse");
  const [activeButton, setActiveButton] = useState("Notifications");
  const [visitedTabs, setVisitedTabs] = useState<VisitedTabs>({
    vVerse: {
      Notifications: true,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vGuide: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vBlog: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vNation: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vTube: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vJobs: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vLance: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vCollege: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vMarket: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vEvents: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vWebinars: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
    vExperts: {
      Notifications: false,
      Messages: false,
      Emails: false,
      Planner: false,
      Announcements: false,
    },
  });

  const buttons = [
    "Notifications",
    "Messages",
    "Emails",
    "Planner",
    "Announcements",
  ];

  const isTabFullyVisited = (tab: TabKey) => {
    for (let button of buttons) {
      if (!visitedTabs[tab][button]) {
        return false;
      }
    }
    return true;
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

  const vVerseTotal =
    VAlertCenterData.vVerse.Notifications.length +
    VAlertCenterData.vVerse.Messages.length +
    VAlertCenterData.vVerse.Emails.length +
    VAlertCenterData.vVerse.Planner.length +
    VAlertCenterData.vVerse.Announcements.length;
  const vGuideTotal =
    VAlertCenterData.vGuide.Notifications.length +
    VAlertCenterData.vGuide.Messages.length +
    VAlertCenterData.vGuide.Emails.length +
    VAlertCenterData.vGuide.Planner.length +
    VAlertCenterData.vGuide.Announcements.length;
  const vBlogTotal =
    VAlertCenterData.vBlog.Notifications.length +
    VAlertCenterData.vBlog.Messages.length +
    VAlertCenterData.vBlog.Emails.length +
    VAlertCenterData.vBlog.Planner.length +
    VAlertCenterData.vBlog.Announcements.length;
  const vNationTotal =
    VAlertCenterData.vNation.Notifications.length +
    VAlertCenterData.vNation.Messages.length +
    VAlertCenterData.vNation.Emails.length +
    VAlertCenterData.vNation.Planner.length +
    VAlertCenterData.vNation.Announcements.length;
  const vTubeTotal =
    VAlertCenterData.vTube.Notifications.length +
    VAlertCenterData.vTube.Messages.length +
    VAlertCenterData.vTube.Emails.length +
    VAlertCenterData.vTube.Planner.length +
    VAlertCenterData.vTube.Announcements.length;
  const vJobsTotal =
    VAlertCenterData.vJobs.Notifications.length +
    VAlertCenterData.vJobs.Messages.length +
    VAlertCenterData.vJobs.Emails.length +
    VAlertCenterData.vJobs.Planner.length +
    VAlertCenterData.vJobs.Announcements.length;
  const vLanceTotal =
    VAlertCenterData.vLance.Notifications.length +
    VAlertCenterData.vLance.Messages.length +
    VAlertCenterData.vLance.Emails.length +
    VAlertCenterData.vLance.Planner.length +
    VAlertCenterData.vLance.Announcements.length;
  const vCollegeTotal =
    VAlertCenterData.vCollege.Notifications.length +
    VAlertCenterData.vCollege.Messages.length +
    VAlertCenterData.vCollege.Emails.length +
    VAlertCenterData.vCollege.Planner.length +
    VAlertCenterData.vCollege.Announcements.length;
  const vMarketTotal =
    VAlertCenterData.vMarket.Notifications.length +
    VAlertCenterData.vMarket.Messages.length +
    VAlertCenterData.vMarket.Emails.length +
    VAlertCenterData.vMarket.Planner.length +
    VAlertCenterData.vMarket.Announcements.length;
  const vEventsTotal =
    VAlertCenterData.vEvents.Notifications.length +
    VAlertCenterData.vEvents.Messages.length +
    VAlertCenterData.vEvents.Emails.length +
    VAlertCenterData.vEvents.Planner.length +
    VAlertCenterData.vEvents.Announcements.length;
  const vWebinarsTotal =
    VAlertCenterData.vWebinars.Notifications.length +
    VAlertCenterData.vWebinars.Messages.length +
    VAlertCenterData.vWebinars.Emails.length +
    VAlertCenterData.vWebinars.Planner.length +
    VAlertCenterData.vWebinars.Announcements.length;
  const vExpertsTotal =
    VAlertCenterData.vExperts.Notifications.length +
    VAlertCenterData.vExperts.Messages.length +
    VAlertCenterData.vExperts.Emails.length +
    VAlertCenterData.vExperts.Planner.length +
    VAlertCenterData.vExperts.Announcements.length;

  const badgeData = {
    vVerse: {
      Notifications: VAlertCenterData.vVerse.Notifications.length,
      Messages: VAlertCenterData.vVerse.Messages.length,
      Emails: VAlertCenterData.vVerse.Emails.length,
      Planner: VAlertCenterData.vVerse.Planner.length,
      Announcements: VAlertCenterData.vVerse.Announcements.length,
    },
    vGuide: {
      Notifications: VAlertCenterData.vGuide.Notifications.length,
      Messages: VAlertCenterData.vGuide.Messages.length,
      Emails: VAlertCenterData.vGuide.Emails.length,
      Planner: VAlertCenterData.vGuide.Planner.length,
      Announcements: VAlertCenterData.vGuide.Announcements.length,
    },
    vBlog: {
      Notifications: VAlertCenterData.vBlog.Notifications.length,
      Messages: VAlertCenterData.vBlog.Messages.length,
      Emails: VAlertCenterData.vBlog.Emails.length,
      Planner: VAlertCenterData.vBlog.Planner.length,
      Announcements: VAlertCenterData.vBlog.Announcements.length,
    },
    vNation: {
      Notifications: VAlertCenterData.vNation.Notifications.length,
      Messages: VAlertCenterData.vNation.Messages.length,
      Emails: VAlertCenterData.vNation.Emails.length,
      Planner: VAlertCenterData.vNation.Planner.length,
      Announcements: VAlertCenterData.vNation.Announcements.length,
    },
    vTube: {
      Notifications: VAlertCenterData.vTube.Notifications.length,
      Messages: VAlertCenterData.vTube.Messages.length,
      Emails: VAlertCenterData.vTube.Emails.length,
      Planner: VAlertCenterData.vTube.Planner.length,
      Announcements: VAlertCenterData.vTube.Announcements.length,
    },
    vJobs: {
      Notifications: VAlertCenterData.vJobs.Notifications.length,
      Messages: VAlertCenterData.vJobs.Messages.length,
      Emails: VAlertCenterData.vJobs.Emails.length,
      Planner: VAlertCenterData.vJobs.Planner.length,
      Announcements: VAlertCenterData.vJobs.Announcements.length,
    },
    vLance: {
      Notifications: VAlertCenterData.vLance.Notifications.length,
      Messages: VAlertCenterData.vLance.Messages.length,
      Emails: VAlertCenterData.vLance.Emails.length,
      Planner: VAlertCenterData.vLance.Planner.length,
      Announcements: VAlertCenterData.vLance.Announcements.length,
    },
    vCollege: {
      Notifications: VAlertCenterData.vCollege.Notifications.length,
      Messages: VAlertCenterData.vCollege.Messages.length,
      Emails: VAlertCenterData.vCollege.Emails.length,
      Planner: VAlertCenterData.vCollege.Planner.length,
      Announcements: VAlertCenterData.vCollege.Announcements.length,
    },
    vMarket: {
      Notifications: VAlertCenterData.vMarket.Notifications.length,
      Messages: VAlertCenterData.vMarket.Messages.length,
      Emails: VAlertCenterData.vMarket.Emails.length,
      Planner: VAlertCenterData.vMarket.Planner.length,
      Announcements: VAlertCenterData.vMarket.Announcements.length,
    },
    vEvents: {
      Notifications: VAlertCenterData.vEvents.Notifications.length,
      Messages: VAlertCenterData.vEvents.Messages.length,
      Emails: VAlertCenterData.vEvents.Emails.length,
      Planner: VAlertCenterData.vEvents.Planner.length,
      Announcements: VAlertCenterData.vEvents.Announcements.length,
    },
    vWebinars: {
      Notifications: VAlertCenterData.vWebinars.Notifications.length,
      Messages: VAlertCenterData.vWebinars.Messages.length,
      Emails: VAlertCenterData.vWebinars.Emails.length,
      Planner: VAlertCenterData.vWebinars.Planner.length,
      Announcements: VAlertCenterData.vWebinars.Announcements.length,
    },
    vExperts: {
      Notifications: VAlertCenterData.vExperts.Notifications.length,
      Messages: VAlertCenterData.vExperts.Messages.length,
      Emails: VAlertCenterData.vExperts.Emails.length,
      Planner: VAlertCenterData.vExperts.Planner.length,
      Announcements: VAlertCenterData.vExperts.Announcements.length,
    },
  };

  const getBadgeStyles = (tab: TabKey, count: number) => {
    return cn(
      "border font-normal w-9 h-9",
      activeTab === tab
        ? "bg-transparent group group-hover:vgWhite group-hover:text-primary border-background"
        : "bg-gray-100 border border-gray-300 text-muted group-hover:bg-background",
      count > 0 && !isTabFullyVisited(tab)
        ? "vgRed text-background border-red-400/50 group-hover:bg-background"
        : ""
    );
  };

  const markTabAndButtonAsVisited = (tab: TabKey, button: string) => {
    setVisitedTabs((prevVisitedTabs) => {
      return Object.assign({}, prevVisitedTabs, {
        [tab]: Object.assign({}, prevVisitedTabs[tab], {
          [button]: true,
        }),
      });
    });
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    markTabAndButtonAsVisited(tab, activeButton);
  };

  const handleButtonChange = (button: string) => {
    setActiveButton(button);
    markTabAndButtonAsVisited(activeTab, button);
  };

  return (
    <div>
      <div className="mb-4">
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
          visitedTabs={visitedTabs}
          handleButtonChange={handleButtonChange}
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
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
        <TabsContent value="vGuide" className={getTabContentStyles("vGuide")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vGuide",
              button: activeButton,
            }}
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
        <TabsContent value="vBlog" className={getTabContentStyles("vBlog")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vBlog",
              button: activeButton,
            }}
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
        <TabsContent value="vNation" className={getTabContentStyles("vNation")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vNation",
              button: activeButton,
            }}
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
        <TabsContent value="vTube" className={getTabContentStyles("vTube")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vTube",
              button: activeButton,
            }}
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
        <TabsContent value="vJobs" className={getTabContentStyles("vJobs")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vJobs",
              button: activeButton,
            }}
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
        <TabsContent value="vLance" className={getTabContentStyles("vLance")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vLance",
              button: activeButton,
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
              button: activeButton,
            }}
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
        <TabsContent value="vMarket" className={getTabContentStyles("vMarket")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vMarket",
              button: activeButton,
            }}
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
        <TabsContent value="vEvents" className={getTabContentStyles("vEvents")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vEvents",
              button: activeButton,
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
              button: activeButton,
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
              button: activeButton,
            }}
            VAlertCenterData={VAlertCenterData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VAlertCenter;
