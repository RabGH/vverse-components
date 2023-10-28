import React from "react";

import VAlertNotificationCard from "./v-alert-notification-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ButtonKey, TabKey } from "@/lib/types";

type VAlertTableProps = {
  currentTabAndButton: {
    tab: TabKey;
    button: ButtonKey;
  };
  VAlertCenterData: Record<string, Record<string, any>>;
}

const VAlertTable = ({
  currentTabAndButton,
  VAlertCenterData,
}: VAlertTableProps) => {
  const { tab, button } = currentTabAndButton;
  const data = VAlertCenterData[tab]?.[button];

  if (!data) {
    return null;
  }

  switch (button) {
    case "Notifications":
      switch (tab) {
        case "vVerse":
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
        case "vGuide":
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
        case "vBlog":
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
        case "vNation":
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
        case "vTube":
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
        case "vJobs":
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
        case "vLance":
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
        case "vCollege":
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
        case "vMarket":
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
        case "vEvents":
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
        case "vWebinars":
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
        case "vExperts":
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
      }
    case "Messages":
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
    case "Emails":
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
    case "Planner":
      switch (tab) {
        case "onlineMeetings":
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
        case "offlineMeetings":
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
        case "webinarMeetings":
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
        case "eventMeetings":
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
      }
    case "News":
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
  }
};

export default VAlertTable;
