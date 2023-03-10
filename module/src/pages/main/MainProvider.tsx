import React from 'react';
import { useReducer } from "react";
import { MainContext, MainDispatch } from './MainContext';
import { getDef } from './MainStore';
import { MainReducer } from './MainReducer';

export function MainPovider({ children }: any) {
    const [data, dispatch] = useReducer(MainReducer, getDef());

    return <>
        <MainContext.Provider value={data}>
            <MainDispatch.Provider value={dispatch}>
                {children}
            </MainDispatch.Provider>
        </MainContext.Provider>
    </>
}
