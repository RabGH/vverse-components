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

export const images = [
  "/images/FarmPicVet.png",
  "/images/PuppyPic.png",
  "/images/PuppyPic2.png",
  "/images/VetSurgerySignPic.png",
  "/images/FarmPicVet.png",
  "/images/PuppyPic.png",
  "/images/PuppyPic2.png",
  "/images/VetSurgerySignPic.png",
  "/images/FarmPicVet.png",
  "/images/PuppyPic.png",
  "/images/PuppyPic2.png",
  "/images/VetSurgerySignPic.png",
  "/images/FarmPicVet.png",
  "/images/PuppyPic.png",
  "/images/PuppyPic2.png",
  "/images/VetSurgerySignPic.png",
  "/images/FarmPicVet.png",
  "/images/PuppyPic.png",
  "/images/PuppyPic2.png",
  "/images/VetSurgerySignPic.png",
  "/images/FarmPicVet.png",
  "/images/PuppyPic.png",
  "/images/PuppyPic2.png",
  "/images/VetSurgerySignPic.png",
];


export const vUserInfoData = {
  id: "MBR-756",
  gender: "Male",
  country: "Egypt",
  location: "UAE - Dubai",
  time: "01:00 PM",
  calendar: "15-Sep-2022 02:45 PM",
  lastSeen: "11-Nov-2022 09:45 PM",
};

export const vGuideUserData = {
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
  currency: "$",
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
  socialGroups: 5,
  followers: 3200,
  members: 9700,
  likes: 4500,
  shares: 1100,
  ratingPoints: 1200,
  rating: 3.7,
};

export const vTubeUserData = {
  channels: 4,
  videos: 1000,
  subscribers: 20000,
  views: 256000,
  likes: 4500,
  shares: 900,
  ratingPoints: 1200,
  rating: 5,
};

export const vJobUserData = {
  experience: 17,
  salary: 2500,
  likes: 4500,
  shares: 900,
};

export const vLanceUserData = {
  services: 20,
  sales: 7500,
  orders: 1000,
  customers: 525,
  successRate: 100,
  likes: 4500,
  shares: 900,
  ratingPoints: 1200,
  rating: 4.7,
};

export const vCollegeUserData = {
  courses: 4,
  sales: 1000,
  orders: 1000,
  customers: 1000,
  likes: 4500,
  shares: 900,
  ratingPoints: 1200,
  rating: 4.7,
};

export const vMarketUserData = {
  stores: 4,
  products: 1000,
  sales: 1000,
  orders: 1000,
  customers: 1000,
  likes: 4500,
  shares: 900,
  ratingPoints: 900,
  rating: 4.9,
};

export const vEventsUserData = {
  events: 20,
  sales: 7500,
  orders: 1000,
  customers: 525,
  likes: 4500,
  shares: 900,
  ratingPoints: 900,
  rating: 4.9,
};

export const vWebinarsUserData = {
  webinars: 20,
  sales: 7500,
  orders: 1000,
  customers: 525,
  likes: 4500,
  shares: 900,
  ratingPoints: 900,
  rating: 4.9,
};

export const vExpertsUserData = {
  consultations: 20,
  sales: 7500,
  orders: 1000,
  customers: 525,
  likes: 4500,
  shares: 900,
  ratingPoints: 900,
  rating: 4.9,
};

export const vMarketingSponsorUserData = {
  investments: 2200,
  sponsored: 10,
  orders: 50,
};

export const vMarketingUserData = {
  sponsorships: 15,
  sales: 2200,
  orders: 50,
  customers: 525,
  likes: 4500,
  shares: 900,
  ratingPoints: 900,
  rating: 4.9,
};

export const VAlertCenterData = {
  Notifications: {
    vVerse: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vGuide: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vBlog: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vNation: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vTube: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vJobs: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vLance: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",

        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",

        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vCollege: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",

        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",

        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vMarket: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",

        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",

        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vEvents: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",

        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",

        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vWebinars: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",

        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",

        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
    vExperts: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Jack",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Dave",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Jason",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Started to follow",
        user: "Jad",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 6,
        title: "Joined Your GroupName",
        user: "Makram",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 7,
        title: "Started to follow",
        user: "Sally",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 8,
        title: "Joined Your GroupName",
        user: "Nour",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",

        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",

        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",

        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: ["viewReport"],
        date: "2023-04-05T12:50:00Z",
      },
    ],
  },
  Messages: [
    {
      id: 1,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vVerse",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 2,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vGuide",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 3,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vBlog",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 4,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vNation",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 5,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vTube",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 6,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vJobs",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 7,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vLance",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 8,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vWebinars",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 9,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vEvents",
      date: "2023-04-05T12:50:00Z",
    },
    {
      id: 10,
      user: "V-Verse",
      title:
        "Sent You a Message, demo vv-verse messaging notification alert center.",
      fromPillar: "vExperts",
      date: "2023-04-05T12:50:00Z",
    },
  ],
  Emails: [
    {
      id: 1,
      senderName: "John Johnny Doe",
      title: "Emailing you about the Vverse Demo",
      subTitle:
        "lorem Hey John, wellish laminable inuent popshop catalyte prismatic guevni.",
      message:
        "Hey John, this is a test email, for the Vverse demo, let me know if you have any questions.",
      date: "2023-04-05T12:50:00Z",
      numberOfMessages: 5,
      type: "vVerse",
    },
    {
      id: 2,
      senderName: "John Johnny Doe",
      title: "Emailing you about the Vverse Demo",
      subTitle:
        "lorem Hey John, wellish laminable inuent popshop catalyte prismatic guevni.",
      message:
        "Hey John, this is a test email, for the Vverse demo, let me know if you have any questions.",
      date: "2023-04-05T12:50:00Z",
      numberOfMessages: 6,
      type: "Personal",
    },
    {
      id: 3,
      senderName: "John Johnny Doe",
      title: "Emailing you about the Vverse Demo",
      subTitle:
        "lorem Hey John, wellish laminable inuent popshop catalyte prismatic guevni.",
      message:
        "Hey John, this is a test email, for the Vverse demo, let me know if you have any questions.",
      date: "2023-04-05T12:50:00Z",
      numberOfMessages: 9,
      type: "Business",
    },
  ],
  Planner: {
    onlineMeetings: [
      {
        id: 1,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "High",
        meetingType: "Online Meetings",
        matters: "Personal",
      },
      {
        id: 2,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Medium",
        meetingType: "Online Meetings",
        matters: "Business",
      },
      {
        id: 3,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Online Meetings",
        matters: "Personal",
      },
    ],
    offlineMeetings: [
      {
        id: 1,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "High",
        meetingType: "Offline Meetings",
        matters: "Personal",
      },
      {
        id: 2,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Medium",
        meetingType: "Offline Meetings",
        matters: "Business",
      },
      {
        id: 3,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Offline Meetings",
        matters: "Personal",
      },
      {
        id: 4,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Offline Meetings",
        matters: "Personal",
      },
    ],
    webinarMeetings: [
      {
        id: 1,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "High",
        meetingType: "Online Webinars",
        matters: "Personal",
      },
      {
        id: 2,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Medium",
        meetingType: "Online Webinars",
        matters: "Business",
      },
      {
        id: 3,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Online Webinars",
        matters: "Personal",
      },
      {
        id: 4,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Online Webinars",
        matters: "Personal",
      },
      {
        id: 5,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Online Webinars",
        matters: "Personal",
      },
    ],
    eventMeetings: [
      {
        id: 1,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "High",
        meetingType: "Offline Events",
        matters: "Personal",
      },
      {
        id: 2,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Medium",
        meetingType: "Offline Events",
        matters: "Business",
      },
      {
        id: 3,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Offline Events",
        matters: "Personal",
      },
      {
        id: 4,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Offline Events",
        matters: "Personal",
      },
      {
        id: 5,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Offline Events",
        matters: "Personal",
      },
      {
        id: 6,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Low",
        meetingType: "Offline Events",
        matters: "Personal",
      },
    ],
    todos: [
      {
        id: 1,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "High",
        meetingType: "Offline Events",
        matters: "Personal",
      },
      {
        id: 2,
        title: "Meeting With Developers",
        startDate: "2023-04-05T11:00:00Z",
        endDate: "2023-04-05T11:30:00Z",
        status: "Medium",
        meetingType: "Offline Events",
        matters: "Business",
      },
    ],
  },
  News: [
    {
      id: 1,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 2,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 3,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 4,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 5,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 6,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 7,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 8,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 9,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
    {
      id: 10,
      title:
        "Cillum adipisicing velit ea nostrud commodo excepteur aliquip nisi in eiusmod reprehenderit.",
      date: "2023-04-05T11:00:00Z",
    },
  ],
};
