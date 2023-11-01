import Heading from "@/components/nav/heading";
import VAlertTab from "./v-alert-center";

import { IconBellFilled } from "@/components/icons/logo-icons";
import VAlertCenterDropDown from "@/components/alert-center/alert-center-popups/v-alert-center-dropdown";
import VAlertCenterDialog from "@/components/alert-center/alert-center-popups/v-alert-center-dialog";

const VAlertProvider = () => {
  return (
    <div className="space-y-10">
      <div className="gap-10">
        <Heading
          title={"V-Verse Alert Center"}
          description={
            "Alert Center that takes data from the backend and displays notifications."
          }
          icon={IconBellFilled}
        />
        <VAlertTab />
      </div>
      <div className="space-y-10 flex flex-col items-center justify-center">
        <Heading
          title={"V-Verse Alert Center Dialog"}
          description={
            "Alert Center that takes data from the backend and displays notifications. Inside a button dialog popover component"
          }
          icon={IconBellFilled}
        />
        <VAlertCenterDialog />
        <VAlertCenterDropDown />
      </div>
    </div>
  );
};

export default VAlertProvider;
