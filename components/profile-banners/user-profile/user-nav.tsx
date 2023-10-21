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
import { Button } from "@/components/ui/button";

const UserNav = () => {
  return (
    <div className="flex flex-wrap flex-row items-center justify-center gap-1">
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Author
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconCandidatesBtn className="w-4 h-4" />}
      >
        Candidate
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconInstructorsBtn className="w-4 h-4" />}
      >
        Instructor
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconSellersBtn className="w-4 h-4" />}
      >
        Seller
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconUsersLancersBtn className="w-4 h-4" />}
      >
        Lancer
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconClientsBtn className="w-4 h-4" />}
      >
        Client
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconUsersOrganizersBtn className="w-4 h-4" />}
      >
        Organizer
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconVHostsBtn className="w-4 h-4" />}
      >
        Host
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Expert
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Sponsor
      </Button>
      <Button
        size="sm"
        variant={"bannerBlue"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Customer
      </Button>
    </div>
  );
};

export default UserNav;
