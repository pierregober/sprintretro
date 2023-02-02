import * as types from "./actionTypes";
import { IAppDispatch } from "../configureStore";

export enum ToggleResources {
  About = "about",
  Experiences = "experiences",
  Licenses = "licenses",
  Filter = "filter",
  Profile = "profile",
}

export interface IToggleActionPayload {
  details: { [k: string]: any };
  resource: ToggleResources;
}

type IToggleActionResponse = (dispatch: IAppDispatch) => void;

export default function toggleAction({
  details = {},
  resource,
  ...props
}: IToggleActionPayload): IToggleActionResponse {
  return (dispatch) => {
    let type = types.TOGGLE_ABOUT_MODAL;

    if (resource === ToggleResources.About) {
      type = types.TOGGLE_ABOUT_MODAL;
    } else if (resource === ToggleResources.Experiences) {
      type = types.TOGGLE_EXPERIENCE_MODAL;
    } else if (resource === ToggleResources.Licenses) {
      type = types.TOGGLE_LICENSE_MODAL;
    } else if (resource === ToggleResources.Filter) {
      type = types.TOGGLE_FILTER_MODAL;
    } else if (resource === ToggleResources.Profile) {
      type = types.TOGGLE_PROFILE_MODAL;
    }
    dispatch({ ...props, details: details || {}, type });
  };
}
