import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/v-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

type VAnnouncementProps = {
  title: string;
  buttonTitle: string;
  footer: string;
  inputPlaceholder: string;
};

/**
 * Renders a dialog with an input field for creating an announcement.
 *
 * @param {object} VAnnouncementProps - The properties for the DialogVInputAnnouncement component.
 * @param {string} VAnnouncementProps.title - The title of the announcement.
 * @param {string} VAnnouncementProps.buttonTitle - The title of the button.
 * @param {string} VAnnouncementProps.footer - The footer content.
 * @param {string} VAnnouncementProps.inputPlaceholder - The placeholder text for the input field.
 *
 * @return {ReactNode} The rendered DialogVInputAnnouncement component.
 */

export function DialogVInputAnnouncement({
  title,
  buttonTitle,
  footer,
  inputPlaceholder,
}: VAnnouncementProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        <DialogTitle>{title}</DialogTitle>
        <div className="p-6">
          <Input placeholder={inputPlaceholder} className="" />
          <div className="flex flex-row justify-center space-x-5">
            <DialogClose>
              <Button className="vPurple mt-5">Cancel</Button>
            </DialogClose>
            <Button className="vBlue mt-5">Save</Button>
          </div>
          <div className="flex flex-col items-center mt-5">
            <DialogFooter className="items-center">
              <Checkbox />
              <p>{footer}</p>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
