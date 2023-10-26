"use client";

import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import VAlertTable from "./v-alert-table";

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
  const [activeBadge, setActiveBadge] = useState("vVerse Notifications");
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
      activeBadge === tabtrigger ? "" : ""
    );
  };

  const getBadgeStyles = (tabstrigger: string, count: number) => {
    return cn(
      "border font-normal w-9 h-9",
      activeBadge === tabstrigger
        ? "bg-transparent group group-hover:vgWhite group-hover:text-primary border-background"
        : "bg-gray-100 border border-gray-300 text-muted group-hover:bg-background",
      count > 0 && !isTabVisited(tabstrigger)
        ? "vgRed text-background border-red-400/50 group-hover:bg-background"
        : ""
    );
  };

  const handleTriggerClick = (tabtrigger: string) => {
    setActiveBadge(tabtrigger);
    markTabAsVisited(tabtrigger);
  };

  const markTabAsVisited = (tabtrigger: string) => {
    setVisitedTabs((prevVisitedTabs) => ({
      ...prevVisitedTabs,
      [tabtrigger]: true,
    }));
  };

  const isTabVisited = (button: string) => visitedTabs[button];

  return (
    <Tabs
      defaultValue="vVerse"
      className="w-64 shadow-md h-full flex"
      orientation="vertical"
    >
      <TabsList className="flex flex-col justify-center items-center">
        <TabsTrigger
          value="vVerse"
          className={getTabTriggerStyles("vVerse")}
          onClick={() => handleTriggerClick("vVerse")}
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
          onClick={() => handleTriggerClick("vGuide")}
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
          onClick={() => handleTriggerClick("vBlog")}
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
          onClick={() => handleTriggerClick("vNation")}
        >
          V-Nation Notifications
          <Badge
            size="numberTag"
            className={getBadgeStyles("vNation", numberOfVnationNotifications)}
          >
            {numberOfVnationNotifications}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="vTube"
          className={getTabTriggerStyles("vTube")}
          onClick={() => handleTriggerClick("vTube")}
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
          onClick={() => handleTriggerClick("vJobs")}
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
          onClick={() => handleTriggerClick("vLance")}
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
          onClick={() => handleTriggerClick("vCollege")}
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
          onClick={() => handleTriggerClick("vMarket")}
        >
          V-Market Notifications
          <Badge
            size="numberTag"
            className={getBadgeStyles("vMarket", numberOfVmarketNotifications)}
          >
            {numberOfVmarketNotifications}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="vEvents"
          className={getTabTriggerStyles("vEvents")}
          onClick={() => handleTriggerClick("vEvents")}
        >
          V-Events Notifications
          <Badge
            size="numberTag"
            className={getBadgeStyles("vEvents", numberOfVeventsNotifications)}
          >
            {numberOfVeventsNotifications}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="vWebinars"
          className={getTabTriggerStyles("vWebinars")}
          onClick={() => handleTriggerClick("vWebinars")}
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
onClick={() => handleTriggerClick("vExperts")}
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
<VAlertTable />
</TabsContent>
<TabsContent value="vGuide" className={getTabContentStyles("vGuide")}>
<VAlertTable />
</TabsContent>
<TabsContent value="vBlog" className={getTabContentStyles("vBlog")}>
<VAlertTable />
</TabsContent>
<TabsContent value="vNation" className={getTabContentStyles("vNation")}>
<VAlertTable />
</TabsContent>
<TabsContent value="vTube" className={getTabContentStyles("vTube")}>
<VAlertTable />
</TabsContent>
<TabsContent value="vJobs" className={getTabContentStyles("vJobs")}>
<VAlertTable />
</TabsContent>
<TabsContent value="vLance" className={getTabContentStyles("vLance")}>
<VAlertTable />
</TabsContent>
<TabsContent value="vCollege" className={getTabContentStyles("vCollege")}>
<VAlertTable />
</TabsContent>
<TabsContent value="vMarket" className={getTabContentStyles("vMarket")}>
<VAlertTable />
</TabsContent>
<TabsContent value="vEvents" className={getTabContentStyles("vEvents")}>
<VAlertTable />
</TabsContent>
<TabsContent
value="vWebinars"
className={getTabContentStyles("vWebinars")}
>
<VAlertTable />
</TabsContent>
<TabsContent value="vExperts" className={getTabContentStyles("vExperts")}>
<VAlertTable />
</TabsContent>
</Tabs>
);
};

export default VAlertTab;
