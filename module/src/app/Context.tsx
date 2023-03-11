import { createContext } from "react";
import { getDef, IData } from "./Store";
import { IAction } from "./Reducer";

export const Context: React.Context<IData> = createContext(getDef());
export const Dispatch: React.Context<React.Dispatch<IAction>> = createContext(null);