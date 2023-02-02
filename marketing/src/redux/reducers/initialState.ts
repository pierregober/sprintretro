// import type {

// } from "../../types";

export type IInitialState = {
  app: {
    notification: { data: {}; status: string };
  };
  auth: {
    isAuthenticated: false;
  };
  profile: {
    about: string;
    details: any;
    experience: Array<any>;
    license: Array<any>;
  };
  socket: WebSocket | null;
  toggle: {
    [key: string]: boolean;
  };
};

// export interface IStandardList<T> {
//   all: Array<T>;
//   dataSetKey: number;
//   filtered: Array<T>;
// }

// const StandardList = { all: [], dataSetKey: 0, filtered: [] };

const initialState: IInitialState = {
  app: {
    notification: { data: {}, status: "" },
  },
  auth: {
    isAuthenticated: false,
  },
  profile: {
    about: "",
    details: {},
    experience: [],
    license: [],
  },
  socket: null,
  toggle: {
    aboutModal: false,
    experienceModal: false,
    filterModal: false, //the filter for searches
    licenseModal: false,
    profileModal: false,
    requestModal: false, //yes or cancel types
    subscriptionModal: false, //main view for the upgrading
    subscriptionSurveyModal: false, //the survey modal when a user cancels the subscription
    supportModal: false, //the talk to modal one
    notificationModal: false, //a success or error types -- that as a continue button
  },
};
export default initialState;
