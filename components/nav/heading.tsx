import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type HeadingProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const Heading = ({ title, description, icon: Icon }: HeadingProps) => {
  return (
    <div
      className={`px-4 lg:px-8 flex items-center gap-x-3 mb-8 border-transparent 
      rounded-xl p-6 vBlue text-white`}
    >
      <div className="p-2 w-fit rounded-md">
        <Icon className="w-10 h-10" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;
