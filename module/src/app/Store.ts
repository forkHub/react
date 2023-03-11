import { EHal } from "./enum";

export type TData = {
    hal: EHal,
    id: number;
    idModulAktif: number;
    idFungsiAktif: number;
}

export function getDef(): TData {
    return clone(defData);
}

export function clone(data: TData): TData {
    return {
        ...data,
    }
}

let defData: TData = {
    hal: EHal.MODUL,
    id: 0,
    idModulAktif: 0,
    idFungsiAktif: 0,
}
