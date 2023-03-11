import React from 'react';
import { useReducer } from "react";
import { Context, Dispatch } from './Context';
import { getDef } from './Store';
import { Reducer } from './Reducer';

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
