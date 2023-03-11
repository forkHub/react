import { TDekFungsi } from "../entity/DekFungsi";
import { IModulEntity } from "../entity/Module";
import { ModuleReducer } from "../pages/module/ModuleReducer";
import { EditModuleReducer } from "../pages/module_edit/ModulEditReducer";
import { EAction, EHal } from "./enum";
import { TData } from "./Store";

export type TAction = {
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

export function Reducer(data: TData, action: TAction): TData {
    let tag: string = getTag(action.type);

    switch (tag) {
        case EHal.MODUL: {
            return ModuleReducer(data, action);
        }
        case EHal.MODUL_EDIT: {
            return EditModuleReducer(data, action);
            return data;
        }
        default: {
            throw Error('tag is not defined ' + tag + '/type ' + action.type);
        }
    }
}
