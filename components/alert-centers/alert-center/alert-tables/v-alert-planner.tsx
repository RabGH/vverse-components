import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ButtonKey, PlannerTabKey, TabKey, VisitedTabs } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  badgePlannerTabData,
  defaultVisitedTabs,
  notificationTabs,
  plannerTabs,
} from "../alert-badge-constants";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import VAlertTable from "../v-alert-table";
import { VAlertCenterData } from "@/backend-data-test";

type VAlertPlannerProps = {
  activeTab: PlannerTabKey;
  setActiveTab: (tab: TabKey) => void;
  setVisitedTabs: (tabs: VisitedTabs) => void;
};

const VAlertPlanner = ({
  activeTab,
  setActiveTab,
  setVisitedTabs,
}: VAlertPlannerProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("onlineMeetings");
  const [, setVisitedTabs] = useState<VisitedTabs>({
    ...defaultVisitedTabs,
  });

  const isButtonFullyVisited = (button: ButtonKey) => {
    let tabs: TabKey[];
    if (button === "Planner") {
      tabs = plannerTabs;
    } else {
      return true;
    }
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

  return (
    <Tabs
      defaultValue="onlineMeetings"
      className="w-64 shadow-md h-full flex"
      orientation="vertical"
    >
      <TabsList className="flex flex-col justify-center items-center">
        <TabsTrigger
          value="onlineMeetings"
          className={getTabTriggerStyles("onlineMeetings")}
          onClick={() => handleTabChange("onlineMeetings", "Planner")}
        >
          Online Meetings
          <Badge
            size="numberTag"
            className={getBadgeStyles(
              "onlineMeetings",
              badgePlannerTabData.Planner.onlineMeetings,
              "Planner"
            )}
          >
            {badgePlannerTabData.Planner.onlineMeetings}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="offlineMeetings"
          className={getTabTriggerStyles("offlineMeetings")}
          onClick={() => handleTabChange("offlineMeetings", "Planner")}
        >
          Offline Meetings
          <Badge
            size="numberTag"
            className={getBadgeStyles(
              "offlineMeetings",
              badgePlannerTabData.Planner.offlineMeetings,
              "Planner"
            )}
          >
            {badgePlannerTabData.Planner.offlineMeetings}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="webinarMeetings"
          className={getTabTriggerStyles("webinarMeetings")}
          onClick={() => handleTabChange("webinarMeetings", "Planner")}
        >
          Online Webinars
          <Badge
            size="numberTag"
            className={getBadgeStyles(
              "webinarMeetings",
              badgePlannerTabData.Planner.webinarMeetings,
              "Planner"
            )}
          >
            {badgePlannerTabData.Planner.webinarMeetings}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="eventMeetings"
          className={getTabTriggerStyles("eventMeetings")}
          onClick={() => handleTabChange("eventMeetings", "Planner")}
        >
          Offline Events
          <Badge
            size="numberTag"
            className={getBadgeStyles(
              "eventMeetings",
              badgePlannerTabData.Planner.eventMeetings,
              "Planner"
            )}
          >
            {badgePlannerTabData.Planner.eventMeetings}
          </Badge>
        </TabsTrigger>
        <Separator />
        <TabsTrigger
          value="todos"
          className={getTabTriggerStyles("todos")}
          onClick={() => handleTabChange("todos", "Planner")}
        >
          Todo&apos;s
          <Badge
            size="numberTag"
            className={getBadgeStyles(
              "todos",
              badgePlannerTabData.Planner.todos,
              "Planner"
            )}
          >
            {badgePlannerTabData.Planner.todos}
          </Badge>
        </TabsTrigger>
        <Separator />
      </TabsList>
      <TabsContent
        value="onlineMeetings"
        className={getTabContentStyles("onlineMeetings")}
      >
        <VAlertTable
          currentTabAndButton={{
            tab: "onlineMeetings",
            button: "Planner",
          }}
          VAlertCenterData={VAlertCenterData}
        />
      </TabsContent>
      <TabsContent
        value="offlineMeetings"
        className={getTabContentStyles("offlineMeetings")}
      >
        <VAlertTable
          currentTabAndButton={{
            tab: "offlineMeetings",
            button: "Planner",
          }}
          VAlertCenterData={VAlertCenterData}
        />
      </TabsContent>
      <TabsContent
        value="webinarMeetings"
        className={getTabContentStyles("webinarMeetings")}
      >
        <VAlertTable
          currentTabAndButton={{
            tab: "webinarMeetings",
            button: "Planner",
          }}
          VAlertCenterData={VAlertCenterData}
        />
      </TabsContent>
      <TabsContent
        value="eventMeetings"
        className={getTabContentStyles("eventMeetings")}
      >
        <VAlertTable
          currentTabAndButton={{
            tab: "eventMeetings",
            button: "Planner",
          }}
          VAlertCenterData={VAlertCenterData}
        />
      </TabsContent>
      <TabsContent value="todos" className={getTabContentStyles("todos")}>
        <VAlertTable
          currentTabAndButton={{
            tab: "todos",
            button: "Planner",
          }}
          VAlertCenterData={VAlertCenterData}
        />
      </TabsContent>
    </Tabs>
  );
};

export default VAlertPlanner;
