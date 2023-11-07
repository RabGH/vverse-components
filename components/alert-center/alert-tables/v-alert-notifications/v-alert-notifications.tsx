import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ButtonKey, NotificationItem, NotificationTabKey } from "@/lib/types";
import { cn } from "@/lib/utils";
import { badgeNotificationsTabData } from "../../alert-badge-constants";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import VAlertNotificationsTable from "./v-alert-notifications-table";

type VAlertNotificationsProps = {
  tabsData: {
    [tabKey: string]: NotificationItem[];
  };
  activeTab: string;
  setActiveTab: (tab: string, activeButton: ButtonKey) => void;
  visitedTabs: Record<string, boolean>;
  setVisitedTabs: (visitedTabs: Record<string, boolean>) => void;
};

/**
 * Renders the VAlertNotifications component.
 *
 * @param {Object} tabsData - The data for the tabs.
 * @param {Object} visitedTabs - The visited tabs.
 * @param {Function} setVisitedTabs - The function to set the visited tabs.
 * @param {string} activeTab - The active tab.
 * @param {Function} setActiveTab - The function to set the active tab.
 * @return {JSX.Element} The rendered VAlertNotifications component.
 */

const VAlertNotifications = ({
  tabsData,
  visitedTabs,
  setVisitedTabs,
  activeTab,
  setActiveTab,
}: VAlertNotificationsProps) => {
  const handleTabChange = (tab: NotificationTabKey) => {
    setActiveTab(tab, "Notifications");
    const updatedVisitedTab = {
      ...visitedTabs,
      [tab]: true,
    };
    setVisitedTabs(updatedVisitedTab);
  };

  const getTabContentStyles = (tab: NotificationTabKey) => {
    return cn("mt-0");
  };

  const getTabTriggerStyles = (tab: NotificationTabKey) => {
    return cn(
      `h-14 hover:bg-hoverBlue w-64 hover:text-white text-muted justify-between gap-6 
      data-[state=active]:vgBlue hover:border-blue-400/50 hover:border`
    );
  };

  const getBadgeStyles = (tab: NotificationTabKey, count: number) => {
    return cn(
      "border font-normal w-9 h-9",
      activeTab === tab
        ? "bg-transparent group group-hover:vgWhite group-hover:text-primary border-background"
        : "bg-gray-100 border border-gray-300 text-muted group-hover:bg-background",
      count > 0 && !isTabVisited(tab)
        ? "vgRed text-background border-red-400/50 group-hover:bg-background"
        : ""
    );
  };

  const isTabVisited = (tab: string) => visitedTabs[tab];

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
          onClick={() => handleTabChange("vVerse")}
        >
          V-Verse Notifications
          <Badge
            size="numberTag"
            className={getBadgeStyles(
              "vVerse",
              badgeNotificationsTabData.Notifications.vVerse
            )}
          >
            {badgeNotificationsTabData.Notifications.vVerse}
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
            className={getBadgeStyles(
              "vGuide",
              badgeNotificationsTabData.Notifications.vGuide
            )}
          >
            {badgeNotificationsTabData.Notifications.vGuide}
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
            className={getBadgeStyles(
              "vBlog",
              badgeNotificationsTabData.Notifications.vBlog
            )}
          >
            {badgeNotificationsTabData.Notifications.vBlog}
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
              badgeNotificationsTabData.Notifications.vNation
            )}
          >
            {badgeNotificationsTabData.Notifications.vNation}
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
            className={getBadgeStyles(
              "vTube",
              badgeNotificationsTabData.Notifications.vTube
            )}
          >
            {badgeNotificationsTabData.Notifications.vTube}
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
            className={getBadgeStyles(
              "vJobs",
              badgeNotificationsTabData.Notifications.vJobs
            )}
          >
            {badgeNotificationsTabData.Notifications.vJobs}
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
            className={getBadgeStyles(
              "vLance",
              badgeNotificationsTabData.Notifications.vLance
            )}
          >
            {badgeNotificationsTabData.Notifications.vLance}
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
              badgeNotificationsTabData.Notifications.vCollege
            )}
          >
            {badgeNotificationsTabData.Notifications.vCollege}
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
              badgeNotificationsTabData.Notifications.vMarket
            )}
          >
            {badgeNotificationsTabData.Notifications.vMarket}
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
              badgeNotificationsTabData.Notifications.vEvents
            )}
          >
            {badgeNotificationsTabData.Notifications.vEvents}
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
              badgeNotificationsTabData.Notifications.vWebinars
            )}
          >
            {badgeNotificationsTabData.Notifications.vWebinars}
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
              badgeNotificationsTabData.Notifications.vExperts
            )}
          >
            {badgeNotificationsTabData.Notifications.vExperts}
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="vVerse" className={getTabContentStyles("vVerse")}>
        <VAlertNotificationsTable notificationData={tabsData["vVerse"]} />
      </TabsContent>
      <TabsContent value="vGuide" className={getTabContentStyles("vGuide")}>
        <VAlertNotificationsTable notificationData={tabsData["vGuide"]} />
      </TabsContent>
      <TabsContent value="vBlog" className={getTabContentStyles("vBlog")}>
        <VAlertNotificationsTable notificationData={tabsData["vBlog"]} />
      </TabsContent>
      <TabsContent value="vNation" className={getTabContentStyles("vNation")}>
        <VAlertNotificationsTable notificationData={tabsData["vNation"]} />
      </TabsContent>
      <TabsContent value="vTube" className={getTabContentStyles("vTube")}>
        <VAlertNotificationsTable notificationData={tabsData["vTube"]} />
      </TabsContent>
      <TabsContent value="vJobs" className={getTabContentStyles("vJobs")}>
        <VAlertNotificationsTable notificationData={tabsData["vJobs"]} />
      </TabsContent>
      <TabsContent value="vLance" className={getTabContentStyles("vLance")}>
        <VAlertNotificationsTable notificationData={tabsData["vLance"]} />
      </TabsContent>
      <TabsContent value="vCollege" className={getTabContentStyles("vCollege")}>
        <VAlertNotificationsTable notificationData={tabsData["vCollege"]} />
      </TabsContent>
      <TabsContent value="vMarket" className={getTabContentStyles("vMarket")}>
        <VAlertNotificationsTable notificationData={tabsData["vMarket"]} />
      </TabsContent>
      <TabsContent value="vEvents" className={getTabContentStyles("vEvents")}>
        <VAlertNotificationsTable notificationData={tabsData["vEvents"]} />
      </TabsContent>
      <TabsContent
        value="vWebinars"
        className={getTabContentStyles("vWebinars")}
      >
        <VAlertNotificationsTable notificationData={tabsData["vWebinars"]} />
      </TabsContent>
      <TabsContent value="vExperts" className={getTabContentStyles("vExperts")}>
        <VAlertNotificationsTable notificationData={tabsData["vExperts"]} />
      </TabsContent>
    </Tabs>
  );
};

export default VAlertNotifications;
