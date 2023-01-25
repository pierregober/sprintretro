//Vendors
import { createAction, createReducer } from "@reduxjs/toolkit";

/** Redux **/
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const auth = createReducer(initialState.auth, (builder) => {
  builder
    .addCase(createAction(types.AUTH_STATUS_CHANGE), (state, action) => {
      return action.auth;
    })
    .addCase(createAction(types.SET_AUTH_CONSTRUCTOR), (state, action) => {
      return action.auth;
    })
    .addDefaultCase((state) => {
      return state;
    });
});
export default auth;
