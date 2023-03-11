import React from "react";
import { IAction, EAction } from "../../app/Reducer";
import { TData, clone } from "../../app/Store";

export function sampleAdd(dispatch: React.Dispatch<IAction>, sampleParam: any) {
    dispatch({
        type: EAction.SAMPLE_ADD,
        sample: sampleParam
    });
}

function handleSampleAdd(data: TData, sampleParam: any): TData {
    let data2 = clone(data);

    sampleParam++;

    return data2;
}

export function SampleReducer(data: TData, action: IAction): TData {
    switch (action.type) {
        case EAction.SAMPLE_ADD: {
            return handleSampleAdd(data, action.sample);
        }
        default: {
            throw Error('action is not handled: ' + action.type);
        }
    }

}
