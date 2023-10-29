import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import VAlertEmailsCard from "./v-alert-emails-card";
import { EmailItem } from "@/lib/types";

type VAlertEmailsTableProps = {
  emailData: EmailItem[];
};

const VAlertEmailsTable = ({ emailData }: VAlertEmailsTableProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px]">
        {emailData.map((item) => (
          <VAlertEmailsCard key={item.id} emails={item} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default VAlertEmailsTable;
