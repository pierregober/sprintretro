import React, { useEffect, useState } from "react";

/** Vendor */
import axios, { AxiosResponse } from "axios";

/** Enums */
import { MaintenanceStatus } from "../../../types";

/** Interfaces */
import { IUseMaintenancePayload } from "../../../types";

export default function useMaintenance(
  props: IUseMaintenancePayload,
): MaintenanceStatus {
  const [status, setStatus] = useState<MaintenanceStatus>(
    MaintenanceStatus.Loading,
  );

  useEffect(() => {
    actions.platformStatus();
  }, []);

  const actions = {
    platformStatus: () => {
      axios
        .get<never, AxiosResponse>("/platform/status?app=" + props.app)
        .then<any>(({ status }: any) => setStatus(status))
        .catch<void>(() => setStatus(MaintenanceStatus.Available));
    },
  };

  //TODO: Switch line 28 to MaintenanceStatus.Unavailable when api endpoint is ready
  return status;
}
