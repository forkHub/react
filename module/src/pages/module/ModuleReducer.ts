import { clone, EHal, IData } from "../../app/Store";
import { getModulById, IModulEntity } from "../../entity/Module";
import { IAction, EAction } from "../../app/Reducer";

export function pilihModul(dispatch: React.Dispatch<IAction>, modul: IModulEntity): void {
    dispatch({
        type: EAction.MODUL_PILIH,
        modul: modul
    });
}

function handleModuleDipilih(data: IData, modul: IModulEntity): IData {
    let data2 = clone(data);
    data2.modulAktif = getModulById(modul.id, data);

    return data2;
}

export function tambahModul(dispatch: React.Dispatch<IAction>, modul: IModulEntity, induk: IModulEntity): void {

    dispatch({
        type: EAction.MODUL_TAMBAH,
        induk: induk,
        modul: modul
    });
}

function handleModuleDitambah(data: IData, modulBaru: IModulEntity, induk: IModulEntity): IData {

    let data2: IData = clone(data);
    data2.modulAr.push(modulBaru);
    getModulById(induk.id, data2).anak.push(modulBaru.id);

    return data2;
}

export function editModul(dispatch: React.Dispatch<IAction>) {
    dispatch({
        type: EAction.MODUL_EDIT
    });
}

function handleModuleDiedit(data: IData): IData {
    let data2 = clone(data);
    data2.hal = EHal.MODUL_EDIT;
    return data2;
}

export function ModuleReducer(data: IData, action: IAction): IData {
    console.log('module Reducer ');
    console.log(action);

    switch (action.type) {
        case EAction.MODUL_EDIT: {
            return handleModuleDiedit(data);
        }
        case EAction.MODUL_PILIH: {
            return handleModuleDipilih(data, action.modul);
        }
        case EAction.MODUL_TAMBAH: {
            return handleModuleDitambah(data, action.modul, action.induk);
        }
        default: {
            console.log(action.type);
            throw Error(action.type);
        }
    }
}
