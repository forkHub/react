import { TDekFungsi } from "../entity/DekFungsi";
import { IModulEntity } from "../entity/Module";
import { ModuleReducer } from "../pages/module/ModuleReducer";
import { EditModuleReducer } from "../pages/module_edit/ModulEditReducer";
import { TData } from "./Store";

export enum EAction {
    MODUL_EDIT = 'modul/edit',
    MODUL_PILIH = 'modul/pilih',
    MODUL_TAMBAH = 'modul/tambah',

    MODUL_EDIT_SELESAI = 'modul_edit/selesai',
    MODUL_EDIT_TAMBAH_FUNGSI = 'modul_edit/tambah_fungsi',

    SAMPLE_ADD = 'sample/add'
}

export type IAction = {
    type: EAction,
    id?: number,
    modul?: IModulEntity,
    induk?: IModulEntity,
    fungsi?: TDekFungsi,


    sample?: number
}

function getTag(str: string): string {
    return str.slice(0, str.indexOf('/'));
}

export function Reducer(data: TData, action: IAction): TData {
    let tag: string = getTag(action.type);

    switch (tag) {
        case "modul": {
            return ModuleReducer(data, action);
        }
        case "modul_edit": {
            return EditModuleReducer(data, action);
            return data;
        }
        default: {
            throw Error('tag is not defined ' + tag + '/type ' + action.type);
        }
    }
}
