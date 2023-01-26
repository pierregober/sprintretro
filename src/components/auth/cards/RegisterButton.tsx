/** Vendor **/
import { Button } from "@contra-ui/core";

/** Authenication **/
// import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(): JSX.Element {
  // const { isAuthenticated, logout, isLoading } = useAuth0();

  // const logoutWithRedirect = () =>
  //   logout({
  //     returnTo: process.env.REACT_APP_DOMAIN,
  //   });

  // const authEventHandler = () => {
  //   if (isAuthenticated) {
  //     logoutWithRedirect();
  //   }
  // };

  return (
    <Button style={{ backgroundColor: "#FFBD12" }} appearance="teritary">
      Get Started
    </Button>
  );
}

export default LoginButton;
