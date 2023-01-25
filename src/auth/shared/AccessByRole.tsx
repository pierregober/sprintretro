import React from "react";

/** Vendor **/
import { useAuth0 } from "@auth0/auth0-react";

/** Enum **/
import { Auth0Role } from "../../types";

function AccessByRole({
  children,
  fallback,
  roles = [],
}: {
  children: React.ReactElement;
  fallback: React.ReactElement;
  roles: Array<Auth0Role>;
}): React.ReactElement | null {
  const { user } = useAuth0();

  if (roles.length === 0) {
    return children;
  }

  if (roles.some((role) => user?.access_roles.includes(role))) {
    return children;
  }

  if (user?.access_roles.includes(Auth0Role.PlatformAdmin)) {
    return children;
  }

  return fallback ? <React.Fragment>{fallback}</React.Fragment> : null;
}
export default AccessByRole;
