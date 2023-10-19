import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface RectangleButtonProps {
  icon: LucideIcon;
  label: string;
  title: string;
  link: string;
  variant?: "LGOutline" | "LGFilled";
}

export function RectangleButton({
  icon: Icon,
  label,
  title,
  link,
  variant = "LGOutline",
}: RectangleButtonProps) {
  const buttonClassName = cn("w-[350.5px] h-[100px] group", {
    LGOutline: variant === "LGOutline",
    LGFilled: variant === "LGFilled",
  });

  const labelClassName = cn({
    "text-muted group-hover:text-white": variant === "LGOutline",
    "text-white group-hover:text-muted": variant === "LGFilled",
  });

  return (
    <Link href={link}>
      <Button className={buttonClassName} variant={variant}>
        <div className="flex flex-row gap-3 items-center text-left">
          <Icon className="h-[90px] w-[90px]" />
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold">{title}</h1>
            <Label className={cn(labelClassName)}>{label}</Label>
          </div>
        </div>
      </Button>
    </Link>
  );
}
