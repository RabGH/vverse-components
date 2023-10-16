import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/v-dialog";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

type VAnnouncementProps = {
  title: string;
  description: string;
  buttonTitle: string;
  footer: string;
  inputPlaceholder: string;
};

export function DialogVInputAnnouncement({
  title,
  description,
  buttonTitle,
  footer,
  inputPlaceholder,
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
          <Input placeholder={inputPlaceholder} />
          <div className="flex flex-row justify-center space-x-5">
            <Button className="vGrey mt-5">Cancel</Button>
            <Button className="vBlue mt-5">Save</Button>
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
