import React, { createContext } from 'react';
import { useReducer } from "react";
import { TData, clone, getDef } from './Store';
import { TAction, Reducer } from './Reducer';
import { EAction } from './enum';

export const Context: React.Context<TData> = createContext(getDef());
export const Dispatcher: React.Context<(reducer: (data: TData) => TData) => void> = createContext(null);
// export const Dispatch: React.Context<React.Dispatch<TAction>> = createContext(null);

export function Provider({ children }: any) {
    const [data, dispatchFunc] = useReducer(Reducer, getDef());

    const dispatch = (reducer: (data: TData) => TData) => {
        console.group('dispatcher');

        // dispatchFunc(createAction(data, reducer));
        dispatchFunc(
            {
                type: EAction.CALLBACK,
                payload: (): TData => {
                    let store2: TData = clone(data);
                    return reducer(store2);
                }
            }
        );
        console.groupEnd();
    }

    return <>
        <Context.Provider value={data}>
            <Dispatcher.Provider value={dispatch}>
                {children}
            </Dispatcher.Provider>
        </Context.Provider>
    </>
}
