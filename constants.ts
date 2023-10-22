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

export const partOf = {
  author: UserRoles.partOf.author,
  candidate: UserRoles.partOf.candidate,
  instructor: UserRoles.partOf.instructor,
  seller: UserRoles.partOf.seller,
  lancer: UserRoles.partOf.lancer,
  client: UserRoles.partOf.client,
  organizer: UserRoles.partOf.organizer,
  host: UserRoles.partOf.host,
  expert: UserRoles.partOf.expert,
  sponsor: UserRoles.partOf.sponsor,
  customer: UserRoles.partOf.customer,
};