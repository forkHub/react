import { IModulEntity } from "../entity/Module";
import { handleModuleDiedit, handleModuleDipilih, handleModuleDitambah } from "../pages/module/ModuleReducer";
import { handleModuleSelesai } from "../pages/module_edit/ModulEditReducer";
import { IData } from "./Store";

export enum EAction {
    MODUL_EDIT_MULAI = 'modul/edit/mulai',
    MODUL_DIPILIH = 'modul/pilih',
    MODUL_TAMBAH = 'modul/tambah',
    MODUL_EDIT_SELESAI = 'modul/edit/selesai'
}

export type IAction = {
    type: EAction,
    id?: number,
    modul?: IModulEntity,
    induk?: IModulEntity
}

export function Reducer(data: IData, action: IAction): IData {
    console.log('Reducer ');
    console.log(action);

    switch (action.type) {
        case EAction.MODUL_EDIT_MULAI: {
            return handleModuleDiedit(data);
        }
        case EAction.MODUL_EDIT_SELESAI: {
            return handleModuleSelesai(data);
        }
        case EAction.MODUL_DIPILIH: {
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