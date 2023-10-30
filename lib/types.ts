//! not in use
export type Planner = {
  onlineMeetings: PlannerItem[];
  offlineMeetings: PlannerItem[];
  webinarMeetings: PlannerItem[];
  eventMeetings: PlannerItem[];
};
export type VAlertCenterData = {
  Notifications: Notification;
  Messages: MessageItem[];
  Emails: EmailItem[];
  Planner: Planner;
  News: NewsItem[];
};
export type TabKey = NotificationTabKey | PlannerTabKey;
export type VisitedTabs = {
  Notifications?: Record<NotificationTabKey, boolean>;
  Planner?: Record<PlannerTabKey, boolean>;
  Messages?: boolean;
  Emails?: boolean;
  News?: boolean;
};
export type Notification = {
  vVerse: NotificationItem[];
  vGuide: NotificationItem[];
  vBlog: NotificationItem[];
  vNation: NotificationItem[];
  vTube: NotificationItem[];
  vJobs: NotificationItem[];
  vLance: NotificationItem[];
  vCollege: NotificationItem[];
  vMarket: NotificationItem[];
  vEvents: NotificationItem[];
  vWebinars: NotificationItem[];
  vExperts: NotificationItem[];
};
//!

// notification alert center types

export type NotificationItem = {
  id: number;
  title: string;
  user?: string;
  actions?: string[];
  date: string;
};

export type PlannerItem = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  status: string;
  meetingType: string;
  matters: string;
};

export type MessageItem = {
  id: number;
  user: string;
  title: string;
  fromPillar: string;
  date: string;
};

export type EmailItem = {
  id: number;
  senderName: string;
  title: string;
  subTitle: string;
  message: string;
  date: string;
  numberOfMessages: number;
  type: string;
};

export type NewsItem = {
  id: number;
  title: string;
  date: string;
};

export type VisitedButtons = {
  [buttonName: string]: boolean;
};

export type PlannerTabKey =
  | "onlineMeetings"
  | "offlineMeetings"
  | "webinarMeetings"
  | "eventMeetings"
  | "todos";

export type NotificationTabKey =
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

export type ButtonKey =
  | "Notifications"
  | "Messages"
  | "Emails"
  | "Planner"
  | "News";
