import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import VAlertMessagesCard from "./v-alert-messages-card";
import { MessageItem } from "@/lib/types";

type VAlertMessageTableProps = {
  messageData: MessageItem[];
};

const VAlertMessagesTable = ({ messageData }: VAlertMessageTableProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px]">
        {messageData.map((item) => (
          <VAlertMessagesCard key={item.id} message={item} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default VAlertMessagesTable;
