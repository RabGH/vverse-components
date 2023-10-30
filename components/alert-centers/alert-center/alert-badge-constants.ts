import { VAlertCenterData } from "@/backend-data-test";
import {
  ButtonKey,
  NotificationTabKey,
  PlannerTabKey,
  VisitedTabs,
} from "@/lib/types";

export const vNotifcationsTotal =
  VAlertCenterData.Notifications.vVerse.length +
  VAlertCenterData.Notifications.vGuide.length +
  VAlertCenterData.Notifications.vBlog.length +
  VAlertCenterData.Notifications.vNation.length +
  VAlertCenterData.Notifications.vTube.length +
  VAlertCenterData.Notifications.vJobs.length +
  VAlertCenterData.Notifications.vLance.length +
  VAlertCenterData.Notifications.vCollege.length +
  VAlertCenterData.Notifications.vMarket.length +
  VAlertCenterData.Notifications.vEvents.length +
  VAlertCenterData.Notifications.vWebinars.length +
  VAlertCenterData.Notifications.vExperts.length;

export const vMessagesTotal = VAlertCenterData.Messages.length;
export const vEmailsTotal = VAlertCenterData.Emails.length;

export const vPlannerTotals =
  VAlertCenterData.Planner.onlineMeetings.length +
  VAlertCenterData.Planner.offlineMeetings.length +
  VAlertCenterData.Planner.webinarMeetings.length +
  VAlertCenterData.Planner.eventMeetings.length +
  VAlertCenterData.Planner.todos.length;

export const vNewsTotal = VAlertCenterData.News.length;

export const badgePlannerTabData = {
  Planner: {
    onlineMeetings: VAlertCenterData.Planner.onlineMeetings.length,
    offlineMeetings: VAlertCenterData.Planner.offlineMeetings.length,
    webinarMeetings: VAlertCenterData.Planner.webinarMeetings.length,
    eventMeetings: VAlertCenterData.Planner.eventMeetings.length,
    todos: VAlertCenterData.Planner.todos.length,
  },
};

export const badgeNotificationsTabData = {
  Notifications: {
    vVerse: VAlertCenterData.Notifications.vVerse.length,
    vGuide: VAlertCenterData.Notifications.vGuide.length,
    vBlog: VAlertCenterData.Notifications.vBlog.length,
    vNation: VAlertCenterData.Notifications.vNation.length,
    vTube: VAlertCenterData.Notifications.vTube.length,
    vJobs: VAlertCenterData.Notifications.vJobs.length,
    vLance: VAlertCenterData.Notifications.vLance.length,
    vCollege: VAlertCenterData.Notifications.vCollege.length,
    vMarket: VAlertCenterData.Notifications.vMarket.length,
    vEvents: VAlertCenterData.Notifications.vEvents.length,
    vWebinars: VAlertCenterData.Notifications.vWebinars.length,
    vExperts: VAlertCenterData.Notifications.vExperts.length,
  },
};

// !not in use
export const defaultVisitedTabs: VisitedTabs = {
  Notifications: {
    vVerse: false,
    vGuide: false,
    vBlog: false,
    vNation: false,
    vTube: false,
    vJobs: false,
    vLance: false,
    vCollege: false,
    vMarket: false,
    vEvents: false,
    vWebinars: false,
    vExperts: false,
  },
  Planner: {
    onlineMeetings: false,
    offlineMeetings: false,
    webinarMeetings: false,
    eventMeetings: false,
    todos: false,
  },
  Messages: false,
  Emails: false,
  News: false,
};
export const buttons: ButtonKey[] = [
  "Notifications",
  "Messages",
  "Emails",
  "Planner",
  "News",
];
export const notificationTabs: NotificationTabKey[] = [
  "vVerse",
  "vGuide",
  "vBlog",
  "vNation",
  "vTube",
  "vJobs",
  "vLance",
  "vCollege",
  "vMarket",
  "vEvents",
  "vWebinars",
  "vExperts",
];

export const plannerTabs: PlannerTabKey[] = [
  "onlineMeetings",
  "offlineMeetings",
  "webinarMeetings",
  "eventMeetings",
  "todos",
];
// !
