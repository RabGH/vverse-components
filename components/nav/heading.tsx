import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type HeadingProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * Renders a heading component with a title, description, and icon. Can be deleted.
 *
 * @param {HeadingProps} props - The properties for the heading component.
 * @param {string} props.title - The title of the heading.
 * @param {string} props.description - The description of the heading.
 * @param {React.ElementType} props.icon - The icon component for the heading.
 * @returns {React.ReactElement} - The rendered heading component.
 */

const Heading = ({ title, description, icon: Icon }: HeadingProps) => {
  return (
    <div
      className={`px-4 lg:px-8 flex items-center gap-x-3 mb-8 border-transparent 
      rounded-xl p-6 bg-blue-500 shadow-xl text-white`}
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
