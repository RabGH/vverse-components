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

export const backendData = {
  vVerse: {
    Notifications: [
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
        isShared: true,
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 9,
        title: "Started to follow",
        user: "farah",
        isLiked: true,
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 10,
        title: "Joined Your GroupName",
        user: "Jasmine",
        isCommented: true,
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 11,
        title: "Started to follow",
        user: "Ziad",
        isRequested: true,
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 12,
        title: "Joined Your GroupName",
        user: "Hassan",
        actions: "viewReport",
        date: "2023-04-05T12:50:00Z",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Diaa" },
      { id: 2, title: "Sent You a Message", user: "Rajesh" },
      { id: 3, title: "Sent You a Message", user: "Rajesh" },
      { id: 4, title: "Sent You a Message", user: "Rajesh" },
      { id: 5, title: "Sent You a Message", user: "Rajesh" },
      { id: 6, title: "Sent You a Message", user: "Rajesh" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Yehia",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Hesham",
      },
      {
        id: 3,
        title: "Is Announcing",
        user: "Hesham",
      },
      {
        id: 4,
        title: "Is Announcing",
        user: "Hesham",
        actions: ["accept", "decline"],
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      {
        id: 1,
        title: "Send You a Plan",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T12:50:00Z",
      },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vGuide: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
      {
        id: 3,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 4,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 3,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 4,
        title: "Is Announcing",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 5,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 6,
        title: "Is Announcing",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      {
        id: 1,
        title: "Send You a Plan",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T12:50:00Z",
      },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vBlog: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      {
        id: 1,
        title: "Send You a Plan",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T12:50:00Z",
      },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vNation: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      {
        id: 1,
        title: "Sent You an Email",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 2,
        title: "Email 2 for vGuide button2",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
    ],
    Planner: [
      {
        id: 1,
        title: "Send You a Plan",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
        actions: ["accept", "decline"],
      },
      {
        id: 2,
        title: "Send You a Plan",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
    ],
  },
  vTube: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Send You a Plan", user: "Ahmad Hassan" },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vJobs: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Send You a Plan", user: "Ahmad Hassan" },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vLance: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Send You a Plan", user: "Ahmad Hassan" },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vCollege: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Send You a Plan", user: "Ahmad Hassan" },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vMarket: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Send You a Plan", user: "Ahmad Hassan" },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vEvents: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
      {
        id: 3,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
      {
        id: 3,
        title: "Is Announcing",
        user: "Ahmad Hassan",
        actions: "viewReport",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Send You a Plan", user: "Ahmad Hassan" },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vWebinars: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Send You a Plan", user: "Ahmad Hassan" },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
  vExperts: {
    Notifications: [
      {
        id: 1,
        title: "Started to follow",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Joined Your GroupName",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Sent You a Message", user: "Ahmad Hassan" },
      { id: 2, title: "Sent You a Message", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Has Announced",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Is Announcing",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Sent You an Email", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Send You a Plan", user: "Ahmad Hassan" },
      { id: 2, title: "Send You a Plan", user: "Ahmad Hassan" },
    ],
  },
};
