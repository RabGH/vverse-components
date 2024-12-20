import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SquareButtonProps = {
  icon: LucideIcon;
  label: string;
  link: string;
};

// New Post Button with Icon and link, changed width from 155 to 160 to fit most labels.

/**
 * Renders a square button with an icon, label, and link.
 *
 * @param {Object} props - The properties for the SquareButton component.
 * @param {React.ElementType} props.icon - The icon element to be displayed in the button.
 * @param {string} props.label - The label text to be displayed in the button.
 * @param {string} props.link - The URL to navigate to when the button is clicked.
 * @return {React.ReactNode} The rendered SquareButton component.
 */

export function SquareButton({ icon: Icon, label, link }: SquareButtonProps) {
  return (
    <Link href={link}>
      <Button
        variant="largeOutline"
        className="w-[160px] h-[82px] hover:border-0 group"
      >
        <div className="flex flex-col items-center justify-center space-y-3">
          <Icon />
          <Label className="text-muted group-hover:text-white">{label}</Label>
        </div>
      </Button>
    </Link>
  );
}
