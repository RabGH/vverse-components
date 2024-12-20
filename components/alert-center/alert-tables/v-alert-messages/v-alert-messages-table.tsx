import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import VAlertMessagesCard from "./v-alert-messages-card";
import { MessageItem } from "@/lib/types";

type VAlertMessageTableProps = {
  messageData: MessageItem[];
};

/**
 * Renders a table of alert messages based on the given message data.
 *
 * @param {VAlertMessage[]} messageData - An array of alert message objects.
 * @return {JSX.Element} - The rendered table of alert messages.
 */
const VAlertMessagesTable = ({ messageData }: VAlertMessageTableProps) => {
  const isEmpty = messageData.length === 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px]">
        {isEmpty ? (
          <p className="text-muted font-normal text-2xl items-center justify-center h-full w-full">
            No Messages Notifications to show at this time.
          </p>
        ) : (
          messageData.map((item) => (
            <VAlertMessagesCard key={item.id} message={item} />
          ))
        )}
      </ScrollArea>
    </div>
  );
};

export default VAlertMessagesTable;
