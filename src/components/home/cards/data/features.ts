import {
  Add,
  BChat,
  Canvas,
  Child,
  DietPlan,
  Export,
  HappySun,
  LockOpen,
  Interview,
  SetupPreferences,
  SPulse,
  NetworkCommunication,
  VirtualAssistant2,
} from "../icons/NucleoIcons";

export const more_features = [
  {
    title: "Stay on Schedule",
    desc: "You can keep your team on track with timers for each event. Extend or if everyone is ready to move on click next to proceed",
    icon: DietPlan(),
  },
  {
    title: "You Are In Control",
    desc: "With your account you can toggle hiding cards, disable voting, and hide vote count. You can even assign someone to run the sprint other than the scrum master",
    icon: SetupPreferences(),
  },
  {
    title: "Invite Anyone",
    desc: "Invite people outside of your organization and with no sign in required. Are you done sharing? Make boards private with just one click",
    icon: Add(),
  },
  {
    title: "Unlimited Boards",
    desc: "We allow the creation of unlimited boards to make  team retros to become habit",
    icon: Canvas(),
  },
  {
    title: "Create A New Experience Every Time ",
    desc: "Plenty of formats to keep your team engaged. You can either use a pre-made template or fully customize your experience",
    icon: Child(),
  },
  {
    title: "Real Time Collaboration",
    desc: "Our cards allow you to merge into groups, voting, and sorting/filtering. This allows to keeping the board efficient",
    icon: Interview(),
  },
  {
    title: "Export",
    desc: "Export boards into PDF, CSV, Word, or Image format for you use outside of the app",
    icon: Export(),
  },
];

export const features = [
  {
    title: "Integrations",
    desc: "Export your retrospective cards and action items into Trello, Confluence & Jira",
    icon: NetworkCommunication(),
  },
  {
    title: "Analytics",
    desc: "Check up on your team with the trends that happen after a few retros",
    icon: SPulse(),
  },
  {
    title: "SAML Single Sign On",
    desc: "We give you the control over authentication into our application",
    icon: LockOpen(),
  },
  {
    title: "Customer Support",
    desc: "Our team is here to help. Get a response by the next business day",
    icon: VirtualAssistant2(),
  },
  {
    title: "In-App Messaging",
    desc: "Need to discuss something during the retro? No problem click the avatar of the person and send a message!",
    icon: BChat(),
  },
  {
    title: "Happiness",
    desc: "Award your team and give them a change of pace by improving the  morale with this fun and engaging app",
    icon: HappySun(),
  },
];
