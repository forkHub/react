import { createContext } from "react";
import { IAction, IModuleData } from "./ModuleInterface";
import { getDef } from "./ModuleStore";

export const ModuleContext: React.Context<IModuleData> = createContext(getDef());
export const ModuleDispatch: React.Context<React.Dispatch<IAction>> = createContext(null);