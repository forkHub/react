import React from "react";
import { EAction, IAction } from "../../app/Reducer";
import { TData, clone, EHal } from "../../app/Store";
import { buat, TDekFungsi } from "../../entity/DekFungsi";
import { getModulById } from "../../entity/Module";

export function editModulSelesai(dispatch: React.Dispatch<IAction>) {
    console.log('edit module selesai:');

    dispatch({
        type: EAction.MODUL_EDIT_SELESAI
    });
}

function handleEditModuleSelesai(data: TData): TData {

    let data2 = clone(data);
    data2.hal = EHal.MODUL;

    return data2;
}

export function tambahFungsi(dispatch: React.Dispatch<IAction>) {
    console.log('tambah fungsi');

    dispatch({
        type: EAction.MODUL_EDIT_TAMBAH_FUNGSI,
        fungsi: buat('fungsi')
    });
}

function handleTambahFungsi(data: TData, fungsi: TDekFungsi): TData {

    let data2: TData = clone(data);

    data2.dekFungsiAr.push(fungsi);
    data.modulAktif.fungsi.push(fungsi.id);

    return data2;
}

export function EditModuleReducer(data: TData, action: IAction): TData {
    switch (action.type) {
        case EAction.MODUL_EDIT_SELESAI: {
            return handleEditModuleSelesai(data);
        }
        case EAction.MODUL_EDIT_TAMBAH_FUNGSI: {
            return handleTambahFungsi(data, action.fungsi);
        }
        default: {
            console.log(action.type);
            throw Error(action.type);
        }
    }

}
