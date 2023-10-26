import React from "react";
import VAlertNotificationCard from "./v-alert-notification-card";

interface VAlertTableProps {
  currentTabAndButton: {
    tab: string;
    button: string;
  };
}

const VAlertTable = ({ currentTabAndButton }: VAlertTableProps) => {
  const { tab, button } = currentTabAndButton;

  switch (tab) {
    case "vVerse":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vGuide":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vBlog":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vNation":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vTube":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vJobs":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vLance":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vCollege":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vMarket":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vEvents":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vWebinars":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
    case "vExperts":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
                <VAlertNotificationCard />
              </div>
            </div>
          );
      }
  }
};

export default VAlertTable;
