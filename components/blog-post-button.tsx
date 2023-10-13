import { Button } from "@/components/ui/button";
import { PenSquare, PlusSquare } from "lucide-react";
import { Label } from "@/components/ui/label";

export function BlogPostButton() {
  return (
    <Button
      variant="outline"
      className="w-[150px] h-[82px] hover:border-0 group"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div>
          <PenSquare className="" />
        </div>
        <Label className="text-muted group-hover:text-white">
          New Blog Post
        </Label>
      </div>
    </Button>
  );
}

export function SocialPageButton() {
  return (
    <Button
      variant="outline"
      className="w-[150px] h-[82px] hover:border-0 group"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div>
        <PlusSquare />
        </div>
        <Label className="text-muted group-hover:text-white">
          New Social Page
        </Label>
      </div>
    </Button>
  );
}
