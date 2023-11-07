import { ScrollArea } from "@/components/ui/scroll-area";
import VAlertPlannerCard from "./v-alert-planner-card";
import { PlannerItem } from "@/lib/types";

type VAlertPlannerTableProps = {
  plannerData: PlannerItem[];
};

/**
 * Renders the VAlertPlannerTable component.
 *
 * @param {VAlertPlannerTableProps} plannerData - The planner data to be rendered.
 * @return {ReactElement} The rendered VAlertPlannerTable component.
 */

const VAlertPlannerTable: React.FC<VAlertPlannerTableProps> = ({
  plannerData,
}) => {
  const isEmpty = plannerData.length === 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <ScrollArea className="h-[700px]">
        {isEmpty ? (
          <p className="text-muted font-normal text-2xl items-center justify-center h-full w-full">
            No Email Notifications to show at this time.
          </p>
        ) : (
          plannerData.map((item) => (
            <VAlertPlannerCard key={item.id} planner={item} />
          ))
        )}
      </ScrollArea>
    </div>
  );
};

export default VAlertPlannerTable;
