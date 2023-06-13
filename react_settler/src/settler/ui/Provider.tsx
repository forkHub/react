import React, { createContext } from 'react';
import { useReducer } from "react";
import { TStore, clone } from './Store';
import { Reducer } from './Reducer';

let storeObj: TStore = {
    id: 0
}

export const Context: React.Context<TStore> = createContext(storeObj);
export const Dispatcher: React.Context<(reducer: (data: TStore) => TStore) => void> = createContext(null);

export function Provider({ children }: any) {
    const [store, dispatchFunc] = useReducer(Reducer, storeObj);

    const dispatch = (reducer: (data: TStore) => TStore) => {
        dispatchFunc(
            {
                type: "callback/callback",
                payload: (): TStore => {
                    let store2: TStore = clone(store);
                    return reducer(store2);
                }
            }
        );
    }

    return <>
        <Context.Provider value={store}>
            <Dispatcher.Provider value={dispatch}>
                {children}
            </Dispatcher.Provider>
        </Context.Provider>
    </>
}
