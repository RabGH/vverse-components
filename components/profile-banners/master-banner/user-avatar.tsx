import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IconUserBtn } from "@/components/icons/logo-icons";

export function UserAvatar() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full shrink-0">
        <Avatar size="md">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback />
        </Avatar>
      </div>
    </div>
  );
}
