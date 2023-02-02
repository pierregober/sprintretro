/** Vendors **/
import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";

/** Redux **/
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const about = createReducer(initialState.profile.about, (builder) => {
  builder
    .addCase(createAction(types.GET_ABOUT_SUCCESS), (state, action) => {
      return action.results;
    })
    .addCase(createAction(types.UPDATE_ABOUT_SUCCESS), (state, action) => {
      return action.about;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const details = createReducer(initialState.profile.details, (builder) => {
  builder
    .addCase(createAction(types.UPDATE_PROFILE_SUCCESS), (state, action) => {
      return action.results;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const experience = createReducer(initialState.profile.experience, (builder) => {
  builder
    .addCase(createAction(types.GET_EXPERIENCE_SUCCESS), (state, action) => {
      return action.results;
    })
    .addCase(createAction(types.UPDATE_EXPERIENCE_SUCCESS), (state, action) => {
      return action.experience;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

const license = createReducer(initialState.profile.license, (builder) => {
  builder
    .addCase(createAction(types.GET_LICENSE_SUCCESS), (state, action) => {
      return action.results;
    })
    .addCase(createAction(types.UPDATE_LICENSE_SUCCESS), (state, action) => {
      return action.license;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

export default combineReducers({ about, details, experience, license });
