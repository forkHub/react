import React, { createContext } from 'react';
import { useReducer } from "react";
import { getDef, IData } from './Store';
import { IAction, Reducer } from './Reducer';

export const Context: React.Context<IData> = createContext(getDef());
export const Dispatch: React.Context<React.Dispatch<IAction>> = createContext(null);

export function Provider({ children }: any) {
    const [data, dispatch] = useReducer(Reducer, getDef());

    return <>
        <Context.Provider value={data}>
            <Dispatch.Provider value={dispatch}>
                {children}
            </Dispatch.Provider>
        </Context.Provider>
    </>
}
