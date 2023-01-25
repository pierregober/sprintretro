import { Box, Button, Skeleton } from "@chakra-ui/react";

/** Authenication **/
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(): JSX.Element {
  const { isAuthenticated, logout, isLoading } = useAuth0();

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
      <Skeleton isLoaded={!isLoading}>
        <Button variant="outline" onClick={() => authEventHandler()}>
          {isAuthenticated ? "Log Out" : "Login"}
        </Button>
      </Skeleton>
    </Box>
  );
}

export default LoginButton;
