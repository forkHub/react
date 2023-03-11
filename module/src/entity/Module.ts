import { TData } from "../app/Store";
import { id } from "../util/Id";

export type IModulEntity = {
    id: number,
    nama: string,
    anak: number[],
    fungsi: number[]
}

export function cloneModule(modul: IModulEntity): IModulEntity {
    return { ...modul }
}