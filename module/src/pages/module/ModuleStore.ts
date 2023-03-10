import { EEntityType, IModuleData, IModulEntity } from "./ModuleInterface";
import { id } from "../../util/Id";

export enum editState {
    modulPilih = 'pilih module',
    modulTambah = 'modul klik tambah',
    modulEdit = 'modul klik edit'
}

const data: IModuleData = {
    id: id(),
    dipilih: 0,
    state: editState.modulPilih,
    modulAr: [
        {
            id: 0,
            nama: "nama0",
            anak: [1, 2],
            type: EEntityType.MODUL
        },
        {
            id: 1,
            nama: "nama1",
            anak: [],
            type: EEntityType.MODUL
        },
        {
            id: 2,
            nama: "nama2",
            anak: [3, 4],
            type: EEntityType.MODUL
        },
        {
            id: 3,
            nama: "nama3",
            anak: [],
            type: EEntityType.MODUL
        },
        {
            id: 4,
            nama: "nama4",
            anak: [],
            type: EEntityType.MODUL
        },
    ]
}

export function getDef(): IModuleData {
    return data;
}

function cloneModule(modul: IModulEntity): IModulEntity {
    return {
        ...modul
    }
}

export function clone(data: IModuleData): IModuleData {
    console.log('clone');
    return {
        ...data,
        id: id(),
        modulAr: data.modulAr.map((item: IModulEntity) => {
            return cloneModule(item);
        })
    }
}

export function getModulById(id: number, data: IModuleData): IModulEntity {
    if (!data) return null;
    if (!data.modulAr) return null;

    return data.modulAr.find((item: IModulEntity) => {
        return item.id == id;
    })
}

export function loadByIdIn(ids: number[], data: IModuleData): IModulEntity[] {
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
        type: EEntityType.MODUL
    }

    return modulBaru;
}
