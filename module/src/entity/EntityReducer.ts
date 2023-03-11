import React from "react";
import { EAction } from "../app/enum";
import { TAction } from "../app/Reducer";
import { TData, clone } from "../app/Store";

export function modulDitambah(dispatch: React.Dispatch<TAction>) {
    dispatch({
        type: EAction.MODUL_ENT_DITAMBAH,
    });
}

function handlemodulDitambah(data: TData): TData {
    let data2 = clone(data);
    return data2;
}

export function ModulEntityReducer(data: TData, action: TAction): TData {
    switch (action.type) {
        case EAction.MODUL_SAMPLE: {
            return handlemodulDitambah(data);
        }
        default: {
            throw Error('action is not handled: ' + action.type);
        }
    }

}
