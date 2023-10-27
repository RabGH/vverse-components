import React from "react";
import VAlertNotificationCard from "./v-alert-notification-card";

interface VAlertTableProps {
  currentTabAndButton: {
    tab: string;
    button: string;
  };
  backendData: Record<string, Record<string, any>>;
}

const VAlertTable = ({
  currentTabAndButton,
  backendData,
}: VAlertTableProps) => {
  const { tab, button } = currentTabAndButton;
  const data = backendData[tab][button];

  if (!data) {
    return null;
  }

  switch (tab) {
    case "vVerse":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
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
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <div className="max-h-[700px] overflow-y-auto rounded-lg">
                {data.map((item: any) => (
                  <VAlertNotificationCard
                    key={item.id}
                    user={item.user}
                    title={item.title}
                    dateOfNotification={item.date}
                    actions={item.actions}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          );
      }
  }
};

export default VAlertTable;
// import React from "react";
// import VAlertNotificationCard from "./v-alert-notification-card";

// interface VAlertTableProps {
//   currentTabAndButton: {
//     tab: string;
//     button: string;
//   };
//   backendData: Record<string, Record<string, any>>;
// }

// const VAlertTable = ({ currentTabAndButton, backendData }: VAlertTableProps) => {
//   const { tab, button } = currentTabAndButton;
//   const data = backendData[tab]?.[button] || [];

//   if (!data.length) {
//     return null;
//   }

//   return (
//     <div className="flex flex-col max-w-full">
//       <div className="max-h-[700px] overflow-y-auto rounded-lg">
//         {data.map((item: any) => (
//           <VAlertNotificationCard
//             key={item.id}
//             user={item.user}
//             title={item.title}
//             dateOfNotification={item.date}
//             actions={item.actions}
//             id={item.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VAlertTable;
