import { getModulById, IModulEntity } from "../entity/Module";
import { handleModuleDiedit, handleModuleDipilih, handleModuleDitambah } from "../pages/module/ModuleReducer";
import { clone, EHal, IData } from "./Store";

export enum EAction {
    MODUL_DIEDIT = 'modul/edit',
    MODUL_DIPILIH = 'modul/pilih',
    MODUL_TAMBAH = 'modul/tambah'
}

export type IAction = {
    type: EAction,
    id?: number,
    modul?: IModulEntity,
    induk?: IModulEntity
}

export function Reducer(data: IData, action: IAction): IData {

    switch (action.type) {
        case EAction.MODUL_DIEDIT: {
            return handleModuleDiedit(data);
        }
        case EAction.MODUL_DIPILIH: {
            return handleModuleDipilih(data, action.modul);
        }
        case EAction.MODUL_TAMBAH: {
            return handleModuleDitambah(data, action.modul, action.induk);
        }
        default: {
            throw Error();
        }
    }
}