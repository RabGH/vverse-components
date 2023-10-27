import React from "react";

import VAlertNotificationCard from "./vm-alert-notification-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface VMAlertTableProps {
  currentTabAndButton: {
    tab: string;
    button: string;
  };
  backendData: Record<string, Record<string, any>>;
}

const VMAlertTable = ({
  currentTabAndButton,
  backendData,
}: VMAlertTableProps) => {
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
            <div className="flex flex-col max-w-[1500px]">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vGuide":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vBlog":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vNation":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vTube":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vJobs":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vLance":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vCollege":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vMarket":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vEvents":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vWebinars":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
    case "vExperts":
      switch (button) {
        case "Notifications":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Messages":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Emails":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Planner":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
        case "Announcements":
          return (
            <div className="flex flex-col max-w-full">
              <ScrollArea className="h-[700px] rounded-lg">
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
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          );
      }
  }
};

export default VMAlertTable;
