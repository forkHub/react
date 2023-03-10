import { createContext } from "react";
import { getDef, IMainData } from "./MainStore";
import { IMainAction } from "./MainReducer";

export const MainContext: React.Context<IMainData> = createContext(getDef());
export const MainDispatch: React.Context<React.Dispatch<IMainAction>> = createContext(null);