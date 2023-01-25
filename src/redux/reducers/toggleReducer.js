import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import reduxMethods from "../../dist/js/reduxMethods";
import { createReducer } from "@reduxjs/toolkit";

const toggle = createReducer(initialState.toggle, (builder) => {
  builder
    .addCase(types.TOGGLE_ABOUT_MODAL, (state, action) => {
      return reduxMethods.single.toggleState(state, action, "aboutModal");
    })
    .addCase(types.TOGGLE_EXPERIENCE_MODAL, (state, action) => {
      return reduxMethods.single.toggleState(state, action, "experienceModal");
    })
    .addCase(types.TOGGLE_FILTER_MODAL, (state, action) => {
      return reduxMethods.single.toggleState(state, action, "filterModal");
    })
    .addCase(types.TOGGLE_LICENSE_MODAL, (state, action) => {
      return reduxMethods.single.toggleState(state, action, "licenseModal");
    })
    .addCase(types.TOGGLE_PROFILE_MODAL, (state, action) => {
      return reduxMethods.single.toggleState(state, action, "profileModal");
    })
    .addDefaultCase((state) => {
      return state;
    });
});

export default toggle;
