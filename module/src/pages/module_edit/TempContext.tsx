import { createContext } from "react";
import { getDef, ITempData } from "./TempStore";
import { ITempAction } from "./TempReducer";

export const TempContext: React.Context<ITempData> = createContext(getDef());
export const TempDispatch: React.Context<React.Dispatch<ITempAction>> = createContext(null);