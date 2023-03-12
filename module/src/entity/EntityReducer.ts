import React from "react";
import { EAction } from "../app/enum";
import { TAction } from "../app/Reducer";
import { TData, clone } from "../app/Store";

export function dispatchModulDitambah(dispatch: React.Dispatch<TAction>) {
    dispatch({
        type: EAction.MODUL_ENT_DITAMBAH,
    });
}

function handlemodulDitambah(data: TData): TData {
    let data2 = clone(data);
    return data2;
}

export function dispatchModulDiUpdate(dispatch: React.Dispatch<TAction>) {
    dispatch({
        type: EAction.MODUL_ENT_DIUPDATE,
    });
}

export function ModulEntityReducer(data: TData, action: TAction): TData {
    switch (action.type) {
        case EAction.MODUL_SAMPLE_DIKLIK: {
            return handlemodulDitambah(data);
        }

        case EAction.MODUL_ENT_DIUPDATE: {
            console.log('modul entity diupdate');

            let data2: TData = clone(data);
            data2.moduleEntityUpdateId = Date.now();

            return data2;
        }
        default: {
            throw Error('action is not handled: ' + action.type);
        }
    }

}
