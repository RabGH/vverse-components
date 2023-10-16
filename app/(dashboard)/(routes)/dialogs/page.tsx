import { PopoverAnnouncement } from "@/components/dialogs/popover-announcements";
import { DialogVAnnouncement } from "@/components/dialogs/dialog-v-announcement";
import { DialogVInputAnnouncement } from "@/components/dialogs/dialog-v-announcement-input";

const PopOverPage = () => {
  return (
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
  );
};

export default PopOverPage;
