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
    <div className="flex flex-wrap flex-row items-center justify-center">
      <Button
        variant={"default"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Author
      </Button>
      <Button
        variant={"default"}
        icon={<IconCandidatesBtn className="w-4 h-4" />}
      >
        Candidate
      </Button>
      <Button
        variant={"default"}
        icon={<IconInstructorsBtn className="w-4 h-4" />}
      >
        Instructor
      </Button>
      <Button variant={"default"} icon={<IconSellersBtn className="w-4 h-4" />}>
        Seller
      </Button>
      <Button
        variant={"default"}
        icon={<IconUsersLancersBtn className="w-4 h-4" />}
      >
        Lancer
      </Button>
      <Button variant={"default"} icon={<IconClientsBtn className="w-4 h-4" />}>
        Client
      </Button>
      <Button
        variant={"default"}
        icon={<IconUsersOrganizersBtn className="w-4 h-4" />}
      >
        Organizer
      </Button>
      <Button variant={"default"} icon={<IconVHostsBtn className="w-4 h-4" />}>
        Host
      </Button>
      <Button
        variant={"default"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Expert
      </Button>
      <Button
        variant={"default"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Sponsor
      </Button>
      <Button
        variant={"default"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Customer
      </Button>
    </div>
  );
};

export default UserNav;
