import { IModulEntity } from "../entity/Module";
import { EEntityType } from "../pages/module/ModuleInterface";

export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit'
}

export interface IData {
    hal: EHal,
    idModulDipilih: number,
    modulAr: IModulEntity[],
}

const defData: IData = {
    hal: EHal.MODUL,
    idModulDipilih: 0,
    modulAr: [{
        id: 0,
        anak: [],
        nama: 'root',
        type: EEntityType.MODUL
    }]
}

export function getDef(): IData {
    return defData;
}

export function clone(data: IData): IData {
    return { ...data }
}