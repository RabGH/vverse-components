import { Loader2 } from "lucide-react";

import { IconBullHorn, IconLoader } from "@/components/icons/logo-icons";

interface UserPointProps {
  points: number;
  endorsements: number;
  isLoading?: boolean;
}

const UserPoints = ({ isLoading }: UserPointProps) => {
  return (
    <section className="flex flex-row gap-2">
      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : (
        <div className="flex flex-row justify-center items-center gap-1">
          <IconLoader className="w-7 h-7 text-primary" />
          <p className="text-muted">100</p>
        </div>
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : (
        <div className="flex flex-row justify-center items-center gap-1">
          <IconBullHorn className="w-7 h-7 text-primary" />
          <p className="text-muted">44</p>
        </div>
      )}
    </section>
  );
};

export default UserPoints;
