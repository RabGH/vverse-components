import {
  IconCandidatesBtn,
  IconClientsBtn,
  IconInstructorsBtn,
  IconSellersBtn,
  IconSponsorsBtn,
  IconUserExpertsBtn,
  IconUsersAuthorBtn,
  IconUsersLancersBtn,
  IconUsersOrganizersBtn,
  IconVHostsBtn,
  IconUserCustomerDollar,
} from "@/components/icons/logo-icons";
import { Badge } from "@/components/ui/badge";

type UserTagProps = {
  partOf: Record<string, boolean>;
};

/**
 * Renders the user tags component.
 *
 * @param {UserTagProps} partOf - The props containing information about the user tags.
 * @return {JSX.Element} The rendered user tags component.
 */

const UserTags = ({ partOf }: UserTagProps) => {
  const roles = [
    {
      label: "Author",
      icon: <IconUsersAuthorBtn className="w-4 h-4" />,
    },
    {
      label: "Candidate",
      icon: <IconCandidatesBtn className="w-4 h-4" />,
    },
    {
      label: "Instructor",
      icon: <IconInstructorsBtn className="w-4 h-4" />,
    },
    {
      label: "Seller",
      icon: <IconSellersBtn className="w-4 h-4" />,
    },
    {
      label: "Lancer",
      icon: <IconUsersLancersBtn className="w-4 h-4" />,
    },
    {
      label: "Client",
      icon: <IconClientsBtn className="w-4 h-4" />,
    },
    {
      label: "Organizer",
      icon: <IconUsersOrganizersBtn className="w-4 h-4" />,
    },
    {
      label: "Host",
      icon: <IconVHostsBtn className="w-4 h-4" />,
    },
    {
      label: "Expert",
      icon: <IconUserExpertsBtn className="w-4 h-4" />,
    },
    {
      label: "Sponsor",
      icon: <IconSponsorsBtn className="w-4 h-4" />,
    },
    {
      label: "Customer",
      icon: <IconUserCustomerDollar className="w-4 h-4" />,
    },
  ];

  return (
    <div className="flex flex-wrap flex-row items-center justify-center gap-1">
      {roles.map((role) => (
        <Badge
          key={role.label}
          size="sm"
          variant={partOf[role.label.toLowerCase()] ? "info" : "infoDorment"}
          icon={role.icon}
        >
          {role.label}
        </Badge>
      ))}
    </div>
  );
};

export default UserTags;

// these can also be links to the main page, user can then directly start content to turn the color blue
