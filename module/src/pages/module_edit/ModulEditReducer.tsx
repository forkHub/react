import React from "react";
import { EAction, EHal } from "../../app/enum";
import { TAction, } from "../../app/Reducer";
import { TData, clone } from "../../app/Store";
import { addFungsi, buatFungsi, simpanFungsi } from "../../dao/FungsiDao";
import { simpanModul } from "../../dao/ModulDao";
import { TDekFungsi } from "../../entity/DekFungsi";
import { IModulEntity } from "../../entity/Module";

export function editModulSelesai(dispatch: React.Dispatch<TAction>) {
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

export function tambahFungsi(dispatch: React.Dispatch<TAction>, induk: IModulEntity) {
    console.log('tambah fungsi');

    dispatch({
        type: EAction.MODUL_EDIT_TAMBAH_FUNGSI,
        fungsi: buatFungsi('fungsi'),
        modul: induk
    });
}

function handleTambahFungsi(data: TData, fungsi: TDekFungsi, induk: IModulEntity): TData {
    let data2: TData = clone(data);

    addFungsi(fungsi);
    induk.fungsi.push(fungsi.id);
    simpanModul();
    simpanFungsi();

    return data2;
}

export function EditModuleReducer(data: TData, action: TAction): TData {
    switch (action.type) {
        case EAction.MODUL_EDIT_SELESAI: {
            return handleEditModuleSelesai(data);
        }
        case EAction.MODUL_EDIT_TAMBAH_FUNGSI: {
            return handleTambahFungsi(data, action.fungsi, action.modul);
        }
        default: {
            console.log(action.type);
            throw Error(action.type);
        }
    }

}
