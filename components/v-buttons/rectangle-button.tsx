import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface RectangleButtonProps {
  icon: LucideIcon;
  label: string;
  title: string;
  link: string;
}

// Create Post Button with Icon, title, link, and label

export function RectangleButton({
  icon: Icon,
  label,
  title,
  link,
}: RectangleButtonProps) {
  return (
    <Link href={link}>
      <Button
        variant="LGOutline"
        className="w-[350.5px] h-[100px] hover:border-0 group"
      >
        <div className="flex flex-row gap-3 items-center text-left">
          <Icon className="h-[90px] w-[90px]" />
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold">{title}</h1>
            <Label className="text-muted group-hover:text-white">{label}</Label>
          </div>
        </div>
      </Button>
    </Link>
  );
}
