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
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
        date: "2023-04-05T11:00:00Z",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vGuide: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vBlog: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vNation: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      {
        id: 1,
        title: "Email 1 for vGuide button2",
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
        title: "Planner 1 for vGuide button2",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
      {
        id: 2,
        title: "Planner 2 for vGuide button2",
        user: "Ahmad Hassan",
        date: "2023-04-05T12:50:00Z",
      },
    ],
  },
  vTube: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vJobs: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vLance: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vCollege: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vMarket: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vEvents: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 3,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
        actions: ["accept", "decline"],
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 3,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
        actions: "viewReport",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vWebinars: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
  vExperts: {
    Notifications: [
      {
        id: 1,
        title: "Notification 1 for vGuide button1",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Notification 2 for vGuide button1",
        user: "Ahmad Hassan",
      },
    ],
    Messages: [
      { id: 1, title: "Message 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Message 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Announcements: [
      {
        id: 1,
        title: "Announcement 1 for vGuide button2",
        user: "Ahmad Hassan",
      },
      {
        id: 2,
        title: "Announcement 2 for vGuide button2",
        user: "Ahmad Hassan",
      },
    ],
    Emails: [
      { id: 1, title: "Email 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Email 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
    Planner: [
      { id: 1, title: "Planner 1 for vGuide button2", user: "Ahmad Hassan" },
      { id: 2, title: "Planner 2 for vGuide button2", user: "Ahmad Hassan" },
    ],
  },
};
