import { TDekFungsi } from "../entity/DekFungsi";
import { ModulEntityReducer } from "../entity/EntityReducer";
import { IModulEntity } from "../entity/Module";
import { mainPageReducer } from "../pages/main/MainPageReducer";
import { ModuleReducer } from "../pages/module/ModuleReducer";
import { EditModuleReducer } from "../pages/module_edit/ModulEditReducer";
import { EAction, EEntity, EHal } from "./enum";
import { TData } from "./Store";

//TODO: payload
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
        case EHal.MAIN: {
            return mainPageReducer(data, action);
        }
        case EHal.MODUL: {
            return ModuleReducer(data, action);
        }
        case EHal.MODUL_EDIT: {
            return EditModuleReducer(data, action);
        }
        case EEntity.MODUL_ENT: {
            return ModulEntityReducer(data, action);
        }
        default: {
            throw Error('tag is not defined ' + tag + '/type ' + action.type);
        }
    }
}
