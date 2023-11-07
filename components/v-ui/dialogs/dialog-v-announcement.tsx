import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/v-dialog";
import { Checkbox } from "@/components/ui/checkbox";

type VAnnouncementProps = {
  title: string;
  description: string;
  buttonTitle: string;
  footer: string;
  onClose?: () => void;
  onYes?: () => void;
};

/**
 * Renders a dialog announcement component.
 *
 * @param {VAnnouncementProps} {
 *   title: string,
 *   description: string,
 *   buttonTitle: string,
 *   footer: string,
 *   onClose: () => void,
 *   onYes: () => void
 * } - The props object containing the following properties:
 *   - title: The title of the announcement.
 *   - description: The description of the announcement.
 *   - buttonTitle: The title of the button.
 *   - footer: The footer text.
 *   - onClose: The callback function to be executed when the dialog is closed.
 *   - onYes: The callback function to be executed when the "Yes" button is clicked.
 *
 * @return {JSX.Element} The rendered dialog announcement component.
 */

export function DialogVAnnouncement({
  title,
  description,
  buttonTitle,
  footer,
  onClose,
  onYes,
}: VAnnouncementProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="w-fit">
          {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        <DialogTitle>{title}</DialogTitle>
        <div className="p-6">
          <DialogDescription className="text-black font-bold mt-[-27px]">
            {description}
          </DialogDescription>
          <div className="flex flex-row justify-center space-x-5">
            <DialogClose asChild>
            <Button onClick={onClose} className="vPurple mt-5">
              No
            </Button>
            </DialogClose>
            <Button onClick={onYes} className="vBlue mt-5">
              Yes
            </Button>
          </div>

          <div className="flex flex-col items-center mt-5">
            <DialogFooter className="items-center">
              <Checkbox className="border-muted" />
              <p className="text-muted">{footer}</p>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
