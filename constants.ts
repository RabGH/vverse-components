export const categories = [
  {
    value: "category1",
    label: "Category1",
  },
  {
    value: "category2",
    label: "Category2",
  },
  {
    value: "category3",
    label: "Category3",
  },
  {
    value: "category4",
    label: "Category4",
  },
  {
    value: "category5",
    label: "Category5",
  },
];

export const links = [
  {
    label: "Base Components",
    href: "/baseComponents",
  },
  {
    label: "Video Player",
    href: "/videoPlayer",
  },
  {
    label: "Profile Banner",
    href: "/profileBanner",
  },
];

export const UserRoles = {
  partOf: {
    author: true,
    candidate: false,
    instructor: true,
    seller: false,
    lancer: false,
    client: false,
    organizer: false,
    host: false,
    expert: false,
    sponsor: false,
    customer: false,
  },
};
const UserTags = ({ partOf }: UserTagProps) => {
  return (
    <div className="flex flex-wrap flex-row items-center justify-center gap-1">
      <Badge
        size="sm"
        variant={partOf.author ? "info" : "infoDorment"}
        icon={<IconUsersAuthorBtn className="w-4 h-4" />}
      >
        Author
      </Badge>
      <Badge
        size="sm"
        variant={partOf.candidate ? "info" : "infoDorment"}
        icon={<IconCandidatesBtn className="w-4 h-4" />}
      >
        Candidate
      </Badge>
      <Badge
        size="sm"
        variant={partOf.instructor ? "info" : "infoDorment"}
        icon={<IconInstructorsBtn className="w-4 h-4" />}
      >
        Instructor
      </Badge>
      {/* and so on for the rest of the badges */}
    </div>
  );
};
