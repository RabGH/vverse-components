import { PopoverAnnouncement } from "@/components/dialogs/popover-announcements";
import { DialogVAnnouncement } from "@/components/dialogs/dialog-v-announcement";
import { DialogVInputAnnouncement } from "@/components/dialogs/dialog-v-announcement-input";
import Heading from "@/components/nav/heading";
import { Megaphone } from "lucide-react";

const PopOverPage = () => {
  return (
    <div>
      <Heading
        title={"Dialogs"}
        description={
          "Dialog pop-ups, can contain forms, toast notifcations, login, etc.."
        }
        icon={Megaphone}
      />
      <div className="flex justify-center flex-col items-center space-y-10">
        <div className="space-x-2">
          <PopoverAnnouncement />
          <DialogVAnnouncement
            title={"V-Verse Announcement"}
            description={"Are you sure you want to close this announcement?"}
            buttonTitle={"V-Verse Announcement"}
            footer={"Do not show this message again."}
          />
        </div>
        <div className="space-x-2">
          <DialogVInputAnnouncement
            title={"Add a new Dashboard"}
            description={""}
            buttonTitle={"Add Dashboard"}
            footer={"Set as a Default Dashboard"}
            inputPlaceholder={"Add Your Dashboard Title Here"}
          />
        </div>
      </div>
    </div>
  );
};

export default PopOverPage;
