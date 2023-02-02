/** Vendor **/
import { useDispatch, useSelector } from "react-redux";

/** Types **/
import type { TypedUseSelectorHook } from "react-redux";
import type { IRootState, IAppDispatch } from "../../../redux/configureStore";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => IAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
