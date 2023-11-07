import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type RectangleButtonProps = {
  icon: LucideIcon;
  label: string;
  title: string;
  link: string;
  variant?: "largeOutline" | "largeFilled";
  isLoading?: boolean;
  target?: boolean;
};

/**
 * Renders a rectangular button with an icon, label, title, link, loading state, and target.
 *
 * @param {Object} props - The properties object.
 * @param {React.ElementType} props.icon - The icon component to be rendered.
 * @param {string} props.label - The label text of the button.
 * @param {string} props.title - The title text of the button.
 * @param {string} props.link - The link URL of the button.
 * @param {boolean} props.isLoading - Indicates whether the button is in a loading state.
 * @param {string} props.target - The target attribute of the link.
 * @param {string} props.variant - The variant of the button. Defaults to "largeOutline".
 * @return {React.ElementType} - The JSX element representing the rectangular button.
 */

export function RectangleButton({
  icon: Icon,
  label,
  title,
  link,
  isLoading,
  target,
  variant = "largeOutline",
}: RectangleButtonProps) {
  const buttonClassName = cn(`w-[350.5px] h-[100px] group`, {
    largeOutline: variant === "largeOutline",
    largeFilled: variant === "largeFilled",
  });

  const labelClassName = cn({
    "text-muted group-hover:text-white": variant === "largeOutline",
    "text-white group-hover:text-muted": variant === "largeFilled",
  });

  return (
    <Link
      rel="noopener noreferrer"
      target={target ? "_blank" : "_self"}
      tabIndex={0}
      href={link}
      aria-label={`${label}: ${title}: ${link}`}
    >
      <Button className={buttonClassName} variant={variant}>
        <div className="flex flex-row gap-3 items-center text-left">
          {isLoading ? (
            <Loader2 className="h-11 w-11 animate-spin" />
          ) : (
            <>
              <Icon className="h-[90px] w-[90px]" />
              <div className="flex flex-col space-y-2">
                <h1 className="font-bold">{title}</h1>
                <Label className={cn(labelClassName)}>{label}</Label>
              </div>
            </>
          )}
        </div>
      </Button>
    </Link>
  );
}
