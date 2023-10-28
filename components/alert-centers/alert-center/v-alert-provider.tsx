import Heading from "@/components/nav/heading";
import VAlertTab from "./v-alert-center";

import { IconBellFilled } from "@/components/icons/logo-icons";
import VAlertCenterDropDown from "./alert-center-popups/v-alert-center-dropdown";
import VAlertCenterDialog from "./alert-center-popups/v-alert-center-dialog";

const VAlertProvider = () => {
  return (
    <div className="space-y-10">
      <div className="gap-10">
        <Heading
          title={"V-Verse Alert Center"}
          description={
            "Alert Center that takes data from the backend and displays notifications in 60 combinations, 12 tabs each with a nav of 5 buttons."
          }
          icon={IconBellFilled}
        />
        <VAlertTab />
      </div>
      <div className="space-y-10">
        <Heading
          title={"V-Verse Alert Center Dialog"}
          description={
            "Alert Center that takes data from the backend and displays notifications in 60 combinations, 12 tabs each with a nav of 5 buttons. Inside a button dialog popover component"
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
