import React from "react";
import { EAction } from "../../app/enum";
import { TAction } from "../../app/Reducer";
import { TData, clone } from "../../app/Store";

export function mainPageUpdate(dispatch: React.Dispatch<TAction>) {
    dispatch({
        type: EAction.MAIN_DIUPDATE,
    });
}

function handleMainPageUpdate(data: TData): TData {
    let data2 = clone(data);

    return data2;
}

export function mainPageReducer(data: TData, action: TAction): TData {
    switch (action.type) {
        case EAction.MAIN_DIUPDATE: {
            return handleMainPageUpdate(data);
        }
        default: {
            throw Error('action is not handled: ' + action.type);
        }
    }
}
