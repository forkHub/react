import React from 'react';
import { useReducer } from "react";
import { ModuleContext, ModuleDispatch } from "./ModuleContex";
import { getDef } from './ModuleStore';
import { ModuleReducer } from "./ModuleReducer";

export function ModuleProvider({ children }: any) {
    const [data, dispatch] = useReducer(ModuleReducer, getDef());
    console.log(children);

    return <>
        <ModuleContext.Provider value={data}>
            <ModuleDispatch.Provider value={dispatch}>
                {children}
            </ModuleDispatch.Provider>
        </ModuleContext.Provider>
    </>
}
