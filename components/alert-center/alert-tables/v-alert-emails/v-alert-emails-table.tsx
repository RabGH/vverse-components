import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import VAlertEmailsCard from "./v-alert-emails-card";
import { EmailItem } from "@/lib/types";

type VAlertEmailsTableProps = {
  emailData: EmailItem[];
};

const VAlertEmailsTable = ({ emailData }: VAlertEmailsTableProps) => {
  const isEmpty = emailData.length === 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px]">
        {isEmpty ? (
          <p className="text-muted font-normal text-2xl items-center justify-center h-full w-full">
            No Email Notifications to show at this time.
          </p>
        ) : (
          emailData.map((item) => (
            <VAlertEmailsCard key={item.id} emails={item} />
          ))
        )}
      </ScrollArea>
    </div>
  );
};

export default VAlertEmailsTable;
