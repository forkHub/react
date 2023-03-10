import React from 'react';
import { useReducer } from "react";
import { TempContext, TempDispatch } from './TempContext';
import { getDef } from './TempStore';
import { TempReducer } from './TempReducer';

export function TempProvider({ children }: any) {
    const [data, dispatch] = useReducer(TempReducer, getDef());

    return <>
        <TempContext.Provider value={data}>
            <TempDispatch.Provider value={dispatch}>
                {children}
            </TempDispatch.Provider>
        </TempContext.Provider>
    </>
}
