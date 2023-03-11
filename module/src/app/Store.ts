import { TDekFungsi } from "../entity/DekFungsi";
import { EHal } from "./enum";

export type TData = {
    hal: EHal,
    id: number;
    idModulAktif: number;
    idFungsiAktif: number;

    // fungsi: TDekFungsi,
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
    // fungsi: null,
}
