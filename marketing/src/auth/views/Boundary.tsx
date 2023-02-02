import React, { useEffect, useState } from "react";

/** Vendor */
import axios from "axios";

/** Authenication **/
import { useAuth0 } from "@auth0/auth0-react";
import { IdToken } from "@auth0/auth0-spa-js";

/** Redux */
import { initializeSocketAction } from "../../redux/actions/authActions";
import { useAppDispatch } from "../../dist/js/hooks/reduxHooks";

const Auth0ProviderWithHistory = ({ children }: any) => {
  const [shouldWait, setShouldWait] = useState<boolean>(true);

  const {
    error,
    getIdTokenClaims,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
  } = useAuth0();

  const dispatch = useAppDispatch();
  // Please keep this as an example of redux toolkit for mapping dispatch to props
  // const { auth, socket } = useAppSelector((state: any) => ({
  //   auth: state.facility.auth,
  //   socket: state.member.socket,
  // }));

  /** Step 1. Determine if library has mounted/loaded yet */
  useEffect(() => {
    if (!isLoading) {
      setShouldWait(false);
    }
  }, [isLoading]);

  /** Step 2. Verify user is logged in. Redirect otherwise */
  useEffect(() => {
    if (!isAuthenticated && !shouldWait) {
      console.log("Not Authenticated");
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect, shouldWait]);

  /** Step 3. Update the state of the app */
  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims()
        .then((resp): IdToken | "undefined" | any => {
          const token = String(resp?.__raw);
          axios.defaults.headers.common["Authorization"] = token;
          //Update the ws connection
          dispatch(initializeSocketAction());
        })
        .catch((e) => {
          //make a view for error getting id -- toast
          console.log("Error getting id", e);
        });
      // setActiveMemberAction(user as IMember);
    }
  }, [dispatch, getIdTokenClaims, isAuthenticated]);

  /** Step 3. If user is NOT Authenticated or library is still initializing */
  if (isLoading || !isAuthenticated) {
    // return <AppLoading />;
    return <div>Loading...</div>;
  }

  /** Step 4. Auth0 Error */
  if (error) {
    /** @DEVTeam Build Error Screen */
    return <div>Oops... {error.message}</div>;
  }

  /** Step 5. User is authenticated. Show App */
  return <React.Fragment>{children}</React.Fragment>;
};

export default Auth0ProviderWithHistory;
