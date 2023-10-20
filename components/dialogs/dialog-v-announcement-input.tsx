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
