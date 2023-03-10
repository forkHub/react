export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit'
}

export interface ITempData {
    hal: EHal
}

const defData: ITempData = {
    hal: EHal.MODUL
}

export function getDef(): ITempData {
    return defData;
}

export function clone(data: ITempData): ITempData {
    return { ...data }
}