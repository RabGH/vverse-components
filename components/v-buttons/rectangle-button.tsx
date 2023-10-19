import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface PostButtonProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  link: string;
}

// Create Post Button with Icon, title, link, and label

export function CreatePostButton({
  icon: Icon,
  label,
  title,
  link,
}: PostButtonProps) {
  return (
    <Link href={link}>
      <Button
        variant="MDOutline"
        className="w-[340.5px] h-[100px] hover:border-0 group"
      >
        <div className="flex flex-row gap-3 items-center text-left">
          <Icon className="h-[50px] w-[50px]" />
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold">{title}</h1>
            <Label className="text-muted group-hover:text-white">{label}</Label>
          </div>
        </div>
      </Button>
    </Link>
  );
}
