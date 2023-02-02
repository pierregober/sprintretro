/** Vendor */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

/** Custom Reducers */
import rootReducer from "./reducers/index";

/** Custom Middleware */
import socket from "./middleware/socket";

// Types
import type { ThunkAction } from "redux-thunk";
import type {
  Action,
  AnyAction,
  DevToolsEnhancerOptions,
  Middleware,
} from "@reduxjs/toolkit";

declare module "redux" {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
  }
}

const middleware: Array<Middleware> = [thunk, socket];

const devToolsEnhancer: DevToolsEnhancerOptions = {
  trace: true,
  traceLimit: 25,
};

const store = configureStore({
  devTools: process.env.NODE_ENV === "development" ? devToolsEnhancer : false,
  reducer: rootReducer,
  middleware,
});

// Infer the `IRootState` and `IAppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;

export type { AnyAction };

export default store;
