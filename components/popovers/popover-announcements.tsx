import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "../ui/checkbox";

export function PopoverAnnouncement() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="w-fit">
          Default Announcement
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            V-Verse Announcement
          </DialogTitle>

          <DialogDescription className="text-black font-bold">
            Are you sure you want to close this announcement?
          </DialogDescription>
          <div className="flex flex-row justify-center space-x-4">
            <Button className="vGrey mt-2">No</Button>
            <Button className="vBlue mt-2">Yes</Button>
          </div>
        </DialogHeader>

        <DialogFooter className="items-center mr-10">
          <Checkbox />
          <p>Do not show this message again.</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
