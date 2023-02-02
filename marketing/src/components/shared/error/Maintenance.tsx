import React from "react";

/** Custom Components */
//TODO: Create a loading component for the app

/** Custom Hooks **/
import useMaintenance from "../../../dist/js/hooks/useMaintenance";

/** Enums */
import { MaintenanceStatus } from "../../../types";

interface IMaintenanceBoundary {
  children?: React.ReactChild | React.ReactChild[];
}

function Maintenance({ children }: IMaintenanceBoundary): React.ReactElement {
  const status = useMaintenance({ app: "client" });

  return status === MaintenanceStatus.Loading ? (
    <div>Loading...</div>
  ) : status === MaintenanceStatus.Unavailable ? (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <h2>Hey we're under construction right now. Please come back later.</h2>
      </div>
    </div>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
}
export default Maintenance;
