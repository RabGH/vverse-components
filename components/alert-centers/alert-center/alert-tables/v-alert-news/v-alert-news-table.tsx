import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import VAlertNewsCard from "./v-alert-news-card";
import { NewsItem } from "@/lib/types";

type VAlertNewsTable = {
  newsData: NewsItem[];
};

const VAlertNewsTable = ({ newsData }: VAlertNewsTable) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px] rounded-lg">
        {newsData.map((item) => (
          <VAlertNewsCard key={item.id} news={item} />
        ))}

        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default VAlertNewsTable;
