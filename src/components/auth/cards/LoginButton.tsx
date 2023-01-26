import { Box } from "@chakra-ui/react";
import { Button } from "@contra-ui/core";

/** Authenication **/
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(): JSX.Element {
  const { isAuthenticated, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: process.env.REACT_APP_DOMAIN,
    });

  const authEventHandler = () => {
    if (isAuthenticated) {
      logoutWithRedirect();
    }
  };

  return (
    <Box>
      {/* <Skeleton isLoaded={!isLoading}> */}
      <Button appearance="teritary" onClick={() => authEventHandler()}>
        {isAuthenticated ? "Log Out" : "Login"}
      </Button>
      {/* </Skeleton> */}
    </Box>
  );
}

export default LoginButton;
