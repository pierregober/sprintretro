/** Redux **/
import * as types from "./actionTypes";

export function updateAuthAction(props: any) {
  return (dispatch: any) => {
    dispatch({
      auth: props || {},
      type: types.AUTH_STATUS_CHANGE,
    });
    if (props.isAuthenticated && props.status === "signedIn")
      dispatch(initializeSocketAction());
  };
}

export function initializeSocketAction() {
  return (dispatch: any) =>
    dispatch({ type: types.ESTABLISH_SOCKET_CONNECTION });
}
