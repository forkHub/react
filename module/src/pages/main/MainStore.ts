import { IModulEntity } from "../../entity/Module";
import { EEntityType } from "../module/ModuleInterface";

export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit'
}

export interface IMainData {
    hal: EHal,
    idModulDipilih: number,
    modulAr: IModulEntity[],
}

const defData: IMainData = {
    hal: EHal.MODUL,
    idModulDipilih: 0,
    modulAr: [{
        id: 0,
        anak: [],
        nama: 'root',
        type: EEntityType.MODUL
    }]
}

export function getDef(): IMainData {
    return defData;
}

export function clone(data: IMainData): IMainData {
    return { ...data }
}