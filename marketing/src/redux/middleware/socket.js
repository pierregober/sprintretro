/* eslint-disable default-case */
import * as types from "../actions/actionTypes";
import axios from "axios";
import history from "../../history";

const socketMiddleware = (store) => {
  let socket = null;
  let socketTimer;

  const startPingPong = () => {
    clearTimeout(socketTimer);
    socketTimer = setInterval(() => {
      socket.send(JSON.stringify({ action: "ping" }));
    }, 20000);
  };

  const resetAuth = () => {
    console.log("Resetting auth, waiting for token refresh...");
    store.dispatch({
      auth: { loading: true, refresh: true },
      type: types.AUTH_STATUS_CHANGE,
    });
  };

  return (next) => (action) => {
    switch (action.type) {
      case types.ESTABLISH_SOCKET_CONNECTION:
        socket = new WebSocket(
          `${process.env.REACT_APP_SOCKET_URL}?` +
            `idToken=${axios.defaults.headers.common.Authorization}&` +
            `url=${history.location.pathname}&` +
            `search=${history.location.search}`,
        );

        //Reset Socket and Attempt To Reestablish Connection
        socket.onerror = (e) => {
          console.log("Socket Error: ", e);
          resetAuth();
        };
        //Startup actions
        socket.onopen = () => {
          startPingPong();
          store.dispatch({
            type: types.SET_SOCKET_CONNECTION,
            socket,
          });
        };

        //Socket connection terminated. Attempt to reconnect
        socket.onclose = () => {
          console.log("Socket Closed");
          clearTimeout(socketTimer);
          resetAuth();
        };

        socket.onmessage = (e) => {
          const data = JSON.parse(e.data);
          if (data.message === "pong") return;
          else if (e.type === "error") console.log(e);
          else if (!(data.message || "").includes("Internal"))
            store.dispatch(data);
        };
        break;
    }
    return next(action);
  };
};

export default socketMiddleware;
