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
    expert: true,
    sponsor: true,
    customer: true,
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

export const userInfoData = {
  id: "MBR-756",
  gender: "Male",
  country: "Egypt",
  location: "UAE - Dubai",
  time: "01:00 PM",
  calendar: "15-Sep-2022 02:45 PM",
  lastSeen: "11-Nov-2022 09:45 PM",
};

export const vNationUserData = {
  sales: 20000,
  earnings: 20000,
  investments: 7500,
  endorsements: 44,
  points: 3500,
  likes: 9000,
  shares: 1100,
  connections: 300,
  followers: 5600,
  members: 10200,
  subscribers: 200,
  customers: 43300,
};

export const vBlogUserData = {
  posts: 1000,
  likes: 9000,
  shares: 1100,
  ratingPoints: 1200,
  rating: 4.7,
};

export const vAuthorUserData = {
  posts: 350,
  socialPages: 4,
  socialGrounds: 5,
  followers: 3200,
  members: 9700,
  likes: 4500,
  shares: 1100,
  ratingPoints: 1200,
  rating: 3.7,
};
