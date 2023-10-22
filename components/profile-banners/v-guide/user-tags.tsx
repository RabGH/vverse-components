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

interface UserTagProps {
variant?: "info" | "infoDorment";
partOf: boolean;
}

const UserTags = ({ variant, partOf }: UserTagProps) => {
return (
<div className="flex flex-wrap flex-row items-center justify-center gap-1">
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconUsersAuthorBtn className="w-4 h-4" />}
>
Author
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconCandidatesBtn className="w-4 h-4" />}
>
Candidate
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconInstructorsBtn className="w-4 h-4" />}
>
Instructor
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconSellersBtn className="w-4 h-4" />}
>
Seller
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconUsersLancersBtn className="w-4 h-4" />}
>
Lancer
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconClientsBtn className="w-4 h-4" />}
>
Client
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconUsersOrganizersBtn className="w-4 h-4" />}
>
Organizer
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconVHostsBtn className="w-4 h-4" />}
>
Host
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconUsersAuthorBtn className="w-4 h-4" />}
>
Expert
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconUsersAuthorBtn className="w-4 h-4" />}
>
Sponsor
</Badge>
<Badge
size="sm"
variant={cn("infoDorment") as BadgeProps["variant"]}
icon={<IconUsersAuthorBtn className="w-4 h-4" />}
>
Customer
</Badge>
</div>
);
};

export default UserTags;

// these can also be links to the main page, user can then directly start content to turn the color blue
