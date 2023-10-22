import {
  IconCandidatesBtn,
  IconClientsBtn,
  IconInstructorsBtn,
  IconSellersBtn,
  IconUsersAuthorBtn,
  IconUsersLancersBtn,
  IconUsersOrganizersBtn,
  IconVHostsBtn,
} from "@/components/icons/logo-icons";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

enum UserRole {
  Author = "author",
  Candidate = "candidate",
  Instructor = "instructor",
  Seller = "seller",
  Lancer = "lancer",
  Client = "client",
  Organizer = "organizer",
  Host = "host",
  Expert = "expert",
  Sponsor = "sponsor",
  Customer = "customer",
}

const roleColors = {
  [UserRole.Author]: "infoDormant",
  [UserRole.Candidate]: "infoDormant",
  [UserRole.Instructor]: "infoDormant",
  [UserRole.Seller]: "infoDormant",
  [UserRole.Lancer]: "infoDormant",
  [UserRole.Client]: "infoDormant",
  [UserRole.Organizer]: "infoDormant",
  [UserRole.Host]: "infoDormant",
  [UserRole.Expert]: "infoDormant",
  [UserRole.Sponsor]: "infoDormant",
  [UserRole.Customer]: "infoDormant",
};

interface UserTagProps {
  roles: UserRole[];
}

const UserTags = ({ roles }: UserTagProps) => {
  return (
    <div className="flex flex-wrap flex-row items-center justify-center gap-1">
      {roles.map((role) => {
        const color = roleColors[role];
        let icon, label;
        switch (role) {
          case UserRole.Author:
            icon = <IconUsersAuthorBtn className="w-4 h-4" />;
            label = "Author";
            break;
          case UserRole.Candidate:
            icon = <IconCandidatesBtn className="w-4 h-4" />;
            label = "Candidate";
            break;
          case UserRole.Instructor:
            icon = <IconInstructorsBtn className="w-4 h-4" />;
            label = "Instructor";
            break;
          case UserRole.Seller:
            icon = <IconSellersBtn className="w-4 h-4" />;
            label = "Seller";
            break;
          case UserRole.Lancer:
            icon = <IconUsersLancersBtn className="w-4 h-4" />;
            label = "Lancer";
            break;
          case UserRole.Client:
            icon = <IconClientsBtn className="w-4 h-4" />;
            label = "Client";
            break;
          case UserRole.Organizer:
            icon = <IconUsersOrganizersBtn className="w-4 h-4" />;
            label = "Organizer";
            break;
          case UserRole.Host:
            icon = <IconVHostsBtn className="w-4 h-4" />;
            label = "Host";
            break;
          case UserRole.Expert:
            icon = <IconUsersAuthorBtn className="w-4 h-4" />;
            label = "Expert";
            break;
          case UserRole.Sponsor:
            icon = <IconUsersAuthorBtn className="w-4 h-4" />;
            label = "Sponsor";
            break;
          case UserRole.Customer:
            icon = <IconUsersAuthorBtn className="w-4 h-4" />;
            label = "Customer";
            break;
        }
        return (
          <Badge
            key={role}
            size="sm"
            variant={
              cn("infoDormant", {
                [color]: roleColors[role],
              }) as BadgeProps["variant"]
            }
            icon={icon}
          >
            {label}
          </Badge>
        );
      })}
    </div>
  );
};

export default UserTags;
