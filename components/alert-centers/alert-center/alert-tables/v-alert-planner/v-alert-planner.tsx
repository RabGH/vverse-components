"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ButtonKey, PlannerItem, TabKey } from "@/lib/types";
import { cn } from "@/lib/utils";
import { badgePlannerTabData, plannerTabs } from "../../alert-badge-constants";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import VAlertPlannerTable from "./v-alert-planner-table";
import { useState } from "react";

type VAlertPlannerProps = {
  tabsData: {
    [tabKey: string]: PlannerItem[];
  };
};

const VAlertPlanner = ({ tabsData }: VAlertPlannerProps) => {
  const [activeTab, setActiveTab] = useState("onlineMeetings");

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
  };

  const getTabContentStyles = (tab: TabKey) => {
    return cn("mt-0");
  };

  const getTabTriggerStyles = (tab: TabKey) => {
    return cn(
      `h-14 hover:bg-hoverBlue w-64 hover:text-white text-muted justify-between gap-6 
data-[state=active]:vgBlue hover:border-blue-400/50 hover:border`
    );
  };

  const getBadgeStyles = (tab: TabKey) => {
    return cn(
      "border font-normal w-9 h-9",
      activeTab === tab
        ? "bg-transparent group group-hover:vgWhite group-hover:text-primary border-background"
        : "bg-gray-100 border border-gray-300 text-muted group-hover:bg-background"
    );
  };

  return (
    <Tabs
      defaultValue="onlineMeetings"
      className="w-64 shadow-md h-full flex"
      orientation="vertical"
    >
      <TabsList className="flex flex-col justify-start">
        <TabsTrigger
          value="onlineMeetings"
          className={getTabTriggerStyles("onlineMeetings")}
          onClick={() => handleTabChange("onlineMeetings")}
        >
          Online Meetings
          <Badge size="numberTag" className={getBadgeStyles("onlineMeetings")}>
            {badgePlannerTabData.Planner.onlineMeetings}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="offlineMeetings"
          className={getTabTriggerStyles("offlineMeetings")}
          onClick={() => handleTabChange("offlineMeetings")}
        >
          Offline Meetings
          <Badge size="numberTag" className={getBadgeStyles("offlineMeetings")}>
            {badgePlannerTabData.Planner.offlineMeetings}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="webinarMeetings"
          className={getTabTriggerStyles("webinarMeetings")}
          onClick={() => handleTabChange("webinarMeetings")}
        >
          Online Webinars
          <Badge size="numberTag" className={getBadgeStyles("webinarMeetings")}>
            {badgePlannerTabData.Planner.webinarMeetings}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="eventMeetings"
          className={getTabTriggerStyles("eventMeetings")}
          onClick={() => handleTabChange("eventMeetings")}
        >
          Offline Events
          <Badge size="numberTag" className={getBadgeStyles("eventMeetings")}>
            {badgePlannerTabData.Planner.eventMeetings}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="todos"
          className={getTabTriggerStyles("todos")}
          onClick={() => handleTabChange("todos")}
        >
          Todo&apos;s
          <Badge size="numberTag" className={getBadgeStyles("todos")}>
            {badgePlannerTabData.Planner.todos}
          </Badge>
        </TabsTrigger>
        <Separator />
      </TabsList>
      <TabsContent
        value="onlineMeetings"
        className={getTabContentStyles("onlineMeetings")}
      >
        <VAlertPlannerTable plannerData={tabsData["onlineMeetings"]} />
      </TabsContent>
      <TabsContent
        value="offlineMeetings"
        className={getTabContentStyles("offlineMeetings")}
      >
        <VAlertPlannerTable plannerData={tabsData["offlineMeetings"]} />
      </TabsContent>
      <TabsContent
        value="webinarMeetings"
        className={getTabContentStyles("webinarMeetings")}
      >
        <VAlertPlannerTable plannerData={tabsData["webinarMeetings"]} />
      </TabsContent>
      <TabsContent
        value="eventMeetings"
        className={getTabContentStyles("eventMeetings")}
      >
        <VAlertPlannerTable plannerData={tabsData["eventMeetings"]} />
      </TabsContent>
      <TabsContent value="todos" className={getTabContentStyles("todos")}>
        <VAlertPlannerTable plannerData={tabsData["todos"]} />
      </TabsContent>
    </Tabs>
  );
};

export default VAlertPlanner;
