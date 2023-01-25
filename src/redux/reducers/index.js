import { combineReducers } from "redux";

import auth from "./authReducer";
import facility from "./facilityReducer";
import gig from "./gigReducer";
import housing from "./housingReducer";
import member from "./memberReducer";
import profile from "./profileReducer";
import socket from "./socketReducer";
import toggle from "./toggleReducer";

const rootReducer = combineReducers({
  auth,
  facility,
  gig,
  housing,
  member,
  profile,
  socket,
  toggle,
});

export default rootReducer;
