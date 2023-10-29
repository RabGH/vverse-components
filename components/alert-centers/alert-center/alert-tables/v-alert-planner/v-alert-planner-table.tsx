import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import VAlertPlannerCard from "./v-alert-planner-card";
import { PlannerItem } from "@/lib/types";

type VAlertPlannerTableProps = {
  plannerData: PlannerItem[];
};

const VAlertPlannerTable: React.FC<VAlertPlannerTableProps> = ({
  plannerData,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px]">
        {plannerData.map((item) => (
          <VAlertPlannerCard key={item.id} planner={item} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default VAlertPlannerTable;
