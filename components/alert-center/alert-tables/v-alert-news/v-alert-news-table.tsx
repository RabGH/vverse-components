import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import VAlertNewsCard from "./v-alert-news-card";
import { NewsItem } from "@/lib/types";

type VAlertNewsTable = {
  newsData: NewsItem[];
};

const VAlertNewsTable = ({ newsData }: VAlertNewsTable) => {
  const isEmpty = newsData.length === 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px] rounded-lg">
        {isEmpty ? (
          <p className="text-muted font-normal text-2xl items-center justify-center h-full w-full">
            No News Notifications to show at this time.
          </p>
        ) : (
          newsData.map((item) => <VAlertNewsCard key={item.id} news={item} />)
        )}

        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default VAlertNewsTable;
