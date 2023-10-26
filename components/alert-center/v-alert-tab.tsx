"use client";

import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import VAlertTable from "./v-alert-table";
import VAlertNav from "./v-alert-nav";

interface VAlertTabProps {
  numberOfVverseNotifications: number;
  numberOfVguideNotifications: number;
  numberOfVblogNotifications: number;
  numberOfVnationNotifications: number;
  numberOfVtubeNotifications: number;
  numberOfVjobsNotifications: number;
  numberOfVlanceNotifications: number;
  numberOfVcollegeNotifications: number;
  numberOfVmarketNotifications: number;
  numberOfVeventsNotifications: number;
  numberOfVwebinarsNotifications: number;
  numberOfVexpertsNotifications: number;
}

const VAlertTab = ({
  numberOfVverseNotifications,
  numberOfVguideNotifications,
  numberOfVblogNotifications,
  numberOfVnationNotifications,
  numberOfVtubeNotifications,
  numberOfVjobsNotifications,
  numberOfVlanceNotifications,
  numberOfVcollegeNotifications,
  numberOfVmarketNotifications,
  numberOfVeventsNotifications,
  numberOfVwebinarsNotifications,
  numberOfVexpertsNotifications,
}: VAlertTabProps) => {
  const [activeTab, setActiveTab] = useState("vVerse Notifications");
  const [activeButton, setActiveButton] = useState("Notifications");
  const [visitedTabs, setVisitedTabs] = useState<Record<string, boolean>>({
    vVerse: true,
  });

  const getTabContentStyles = (tabtrigger: string) => {
    return cn("mt-0");
  };

  const getTabTriggerStyles = (tabtrigger: string) => {
    return cn(
      `h-14 hover:bg-hoverBlue w-64 hover:text-white text-muted justify-between gap-6 
data-[state=active]:vgBlue hover:border-blue-400/50 hover:border`,
      activeTab === tabtrigger ? "" : ""
    );
  };

  const getBadgeStyles = (tabstrigger: string, count: number) => {
    return cn(
      "border font-normal w-9 h-9",
      activeTab === tabstrigger
        ? "bg-transparent group group-hover:vgWhite group-hover:text-primary border-background"
        : "bg-gray-100 border border-gray-300 text-muted group-hover:bg-background",
      count > 0 && !isTabVisited(tabstrigger)
        ? "vgRed text-background border-red-400/50 group-hover:bg-background"
        : ""
    );
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    markTabAsVisited(tab);
  };

  const handleButtonChange = (button: string) => {
    setActiveButton(button);
  };

  const markTabAsVisited = (tab: string) => {
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
          numberOfNotifications={100}
          numberOfMessages={10}
          numberOfEmails={20}
          numberOfPlans={30}
          numberOfAnnouncements={40}
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
        onValueChange={handleTabChange}
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
              className={getBadgeStyles("vVerse", numberOfVverseNotifications)}
            >
              {numberOfVverseNotifications}
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
              className={getBadgeStyles("vGuide", numberOfVguideNotifications)}
            >
              {numberOfVguideNotifications}
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
              className={getBadgeStyles("vBlog", numberOfVblogNotifications)}
            >
              {numberOfVblogNotifications}
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
              className={getBadgeStyles(
                "vNation",
                numberOfVnationNotifications
              )}
            >
              {numberOfVnationNotifications}
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
              className={getBadgeStyles("vTube", numberOfVtubeNotifications)}
            >
              {numberOfVtubeNotifications}
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
              className={getBadgeStyles("vJobs", numberOfVjobsNotifications)}
            >
              {numberOfVjobsNotifications}
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
              className={getBadgeStyles("vLance", numberOfVlanceNotifications)}
            >
              {numberOfVlanceNotifications}
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
              className={getBadgeStyles(
                "vCollege",
                numberOfVcollegeNotifications
              )}
            >
              {numberOfVcollegeNotifications}
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
              className={getBadgeStyles(
                "vMarket",
                numberOfVmarketNotifications
              )}
            >
              {numberOfVmarketNotifications}
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
              className={getBadgeStyles(
                "vEvents",
                numberOfVeventsNotifications
              )}
            >
              {numberOfVeventsNotifications}
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
              className={getBadgeStyles(
                "vWebinars",
                numberOfVwebinarsNotifications
              )}
            >
              {numberOfVwebinarsNotifications}
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
              className={getBadgeStyles(
                "vExperts",
                numberOfVexpertsNotifications
              )}
            >
              {numberOfVexpertsNotifications}
            </Badge>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="vVerse" className={getTabContentStyles("vVerse")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vVerse",
              button: activeButton,
            }}
          />
        </TabsContent>
        <TabsContent value="vGuide" className={getTabContentStyles("vGuide")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vGuide",
              button: activeButton,
            }}
          />
        </TabsContent>
        <TabsContent value="vBlog" className={getTabContentStyles("vBlog")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vBlog",
              button: activeButton,
            }}
          />
        </TabsContent>
        <TabsContent value="vNation" className={getTabContentStyles("vNation")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vNation",
              button: activeButton,
            }}
          />
        </TabsContent>
        <TabsContent value="vTube" className={getTabContentStyles("vTube")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vTube",
              button: activeButton,
            }}
          />
        </TabsContent>
        <TabsContent value="vJobs" className={getTabContentStyles("vJobs")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vJobs",
              button: activeButton,
            }}
          />
        </TabsContent>
        <TabsContent value="vLance" className={getTabContentStyles("vLance")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vLance",
              button: activeButton,
            }}
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
          />
        </TabsContent>
        <TabsContent value="vMarket" className={getTabContentStyles("vMarket")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vMarket",
              button: activeButton,
            }}
          />
        </TabsContent>
        <TabsContent value="vEvents" className={getTabContentStyles("vEvents")}>
          <VAlertTable
            currentTabAndButton={{
              tab: "vEvents",
              button: activeButton,
            }}
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
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default VAlertTab;
