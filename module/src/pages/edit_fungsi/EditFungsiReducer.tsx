import React from "react";
import { EAction } from "../../app/enum";
import { TAction } from "../../app/Reducer";
import { TData, clone } from "../../app/Store";

export function sampleAdd(dispatch: React.Dispatch<TAction>, sampleParam: any) {
    dispatch({
        type: EAction.MODUL_SAMPLE_DIKLIK,
        sample: sampleParam
    });
}

function handleSampleAdd(data: TData, sampleParam: any): TData {
    let data2 = clone(data);

    sampleParam++;

    return data2;
}

export function EditFungsiReducer(data: TData, action: TAction): TData {
    switch (action.type) {
        case EAction.MODUL_SAMPLE_DIKLIK: {
            return handleSampleAdd(data, action.sample);
        }
        default: {
            throw Error('action is not handled: ' + action.type);
        }
    }

}
