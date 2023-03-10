export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit'
}

export interface IMainData {
    hal: EHal
}

const defData: IMainData = {
    hal: EHal.MODUL
}

export function getDef(): IMainData {
    return defData;
}

export function clone(data: IMainData): IMainData {
    return { ...data }
}