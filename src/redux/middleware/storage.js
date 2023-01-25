//Custom Action Types
import * as types from "../actions/actionTypes";

//Custom Methods and Hooks
import { logger } from "../../dist/js/support";
import storageMethods from "../../dist/js/hooks/useStorage";

//Enums
import { AsyncStorageKey } from "../../dist/js/hooks/useStorage";

function storageMiddleware(store) {
  const storage = storageMethods();
  const allowed = [AsyncStorageKey.Device];

  const _getValues = async (keys) => {
    return await storage.getMultiple({ keys }).then((props) => {
      return props.filter((obj) => {
        return (
          Object.keys(obj).filter((key) => allowed.includes(key)).length > 0
        );
      });
    });
  };

  const _updateStore = async (values) => {
    return values.map((props) => {
      let type = null;
      for (const key in props) {
        if (key === AsyncStorageKey.Device) {
          type = types.UPDATE_DEVICE_ACTION;
        }
      }
      if (!type) return;
      store.dispatch({ ...props, type });
    });
  };

  return (next) => (action) => {
    switch (action.type) {
      case types.GET_USER_DEFAULTS:
        try {
          storage
            .getAllKeys()
            .then(_getValues)
            .then(_updateStore)
            .catch((e) => logger.debug("Storage Error: ", e));
        } catch (e) {
          logger.debug("Storage Get Defaults: ", e);
        }
        break;
    }
    next(action);
  };
}
export default storageMiddleware;
