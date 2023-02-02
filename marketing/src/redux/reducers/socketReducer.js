//Vendors
import { createAction, createReducer } from "@reduxjs/toolkit";

/** Redux **/
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const socketReducer = createReducer(initialState.socket, (builder) => {
  builder
    .addCase(createAction(types.ESTABLISH_SOCKET_CONNECTION), () => {
      console.log("ESTABLISHING WS");
      return;
    })
    .addCase(createAction(types.SET_SOCKET_CONNECTION), (state, action) => {
      console.log("SETTING WS");
      return action.socket;
    })
    .addCase(createAction(types.TERMINATE_SOCKET_CONNECTION), () => {
      console.log("TERMINATE WS");
      return;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

export default socketReducer;
