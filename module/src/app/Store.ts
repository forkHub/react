import { IModulEntity } from "../entity/Module";

export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit'
}

export type IData = {
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
    }]
}

export function getDef(): IData {
    return clone(defData);
}

export function clone(data: IData): IData {
    return { ...data }
}