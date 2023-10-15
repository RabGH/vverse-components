import { PopoverAnnouncement } from "@/components/popovers/popover-announcements";
import { PopoverVAnnouncement } from "@/components/popovers/popover-v-announcement";

const PopOverPage = () => {
  return (
    <div className="flex justify-center space-x-2">
      <PopoverAnnouncement />
      <PopoverVAnnouncement />
    </div>
  );
};

export default PopOverPage;
