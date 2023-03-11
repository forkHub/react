import { clone, TData } from "../../app/Store";
import { IModulEntity } from "../../entity/Module";
import { TAction } from "../../app/Reducer";
import React from "react";
import { EAction, EHal } from "../../app/enum";
import { addModule, getModulById, simpanModul } from "../../dao/ModulDao";

export function pilihModul(dispatch: React.Dispatch<TAction>, modul: IModulEntity): void {
    dispatch({
        type: EAction.MODUL_PILIH,
        modul: modul
    });
}

function handleModuleDipilih(data: TData, modul: IModulEntity): TData {
    let data2 = clone(data);
    data2.idModulAktif = modul.id;

    return data2;
}

// export function tambahModul(dispatch: React.Dispatch<TAction>): void {

//     dispatch({
//         type: EAction.MODUL_TAMBAH,
//     });
// }

// function handleModuleDitambah(data: TData): TData {

//     let data2: TData = clone(data);

//     return data2;
// }

export function editModul(dispatch: React.Dispatch<TAction>) {
    dispatch({
        type: EAction.MODUL_EDIT
    });
}

function handleModuleDiedit(data: TData): TData {
    let data2 = clone(data);
    data2.hal = EHal.MODUL_EDIT;
    return data2;
}

export function sampleKlik(dispatch: React.Dispatch<TAction>) {
    dispatch({
        type: EAction.MODUL_SAMPLE
    })
}

function handleSampleKlik(data: TData): TData {
    let data2: TData = clone(data);
    data2.hal = EHal.SAMPLE;

    return data2;
}

export function ModuleReducer(data: TData, action: TAction): TData {
    console.log('module Reducer ');
    console.log(action);

    switch (action.type) {
        case EAction.MODUL_EDIT: {
            return handleModuleDiedit(data);
        }
        case EAction.MODUL_PILIH: {
            return handleModuleDipilih(data, action.modul);
        }
        case EAction.MODUL_SAMPLE: {
            return handleSampleKlik(data);
        }
        default: {
            console.log(action.type);
            throw Error(action.type);
        }
    }
}
