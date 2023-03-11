import { IData } from "../app/Store";
import { id } from "../util/Id";

export type IModulEntity = {
    id: number,
    nama: string,
    anak: number[],
}

export function getModulById(id: number, data: IData): IModulEntity {

    let hasil: IModulEntity = data.modulAr.find((item: IModulEntity) => {
        return item.id == id;
    });

    if (!hasil) throw Error('id not found: ' + id);

    return hasil;
}

export function loadByIdIn(ids: number[], data: IData): IModulEntity[] {
    if (ids.length == 0) return [];

    return data.modulAr.filter((item: IModulEntity) => {
        let ok: boolean = false;
        ids.forEach((id: number) => {
            if (item.id == id) ok = true;
        });

        return ok;
    });
}

export function buat(nama: string): IModulEntity {
    let modulBaru: IModulEntity = {
        id: id(),
        nama: nama,
        anak: [],
    }

    return modulBaru;
}

export function cloneModule(modul: IModulEntity): IModulEntity {
    return { ...modul }
}