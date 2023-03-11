import { getModulById, IModulEntity } from "../../entity/Module";
import { handleModuleDiedit, handleModuleDipilih, handleModuleDitambah } from "../module/ModuleReducer";
import { clone, EHal, IMainData } from "./MainStore";

export enum EMainAction {
    MODUL_DIEDIT = 'modul/edit',
    MODUL_DIPILIH = 'modul/pilih',
    MODUL_TAMBAH = 'modul/tambah'
}

export interface IMainAction {
    type: EMainAction,
    id?: number,
    modul?: IModulEntity,
    induk?: IModulEntity
}

export function MainReducer(data: IMainData, action: IMainAction): IMainData {

    switch (action.type) {
        case EMainAction.MODUL_DIEDIT: {
            return handleModuleDiedit(data);
        }
        case EMainAction.MODUL_DIPILIH: {
            return handleModuleDipilih(data, action.modul);
        }
        case EMainAction.MODUL_TAMBAH: {
            return handleModuleDitambah(data, action.modul, action.induk);
        }
        default: {
            throw Error();
        }
    }
}