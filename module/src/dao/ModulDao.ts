import { IModulEntity } from "../entity/Module";
import { id } from "../util/Id";

export function simpanModul(): void {
    window.localStorage.setItem(table, JSON.stringify(daftar));
}

function load(): void {
    while (daftar.length > 0) {
        daftar.pop();
    }

    try {
        let str: string = window.localStorage.getItem(table);
        if (str) {
            daftar = JSON.parse(str);
        }
        else {
            daftar.push(buatModuleDefault());
            simpanModul();
        }
    }
    catch (e) {
        daftar.push(buatModuleDefault());
        simpanModul();
        console.log(e);
    }
}

function buatModuleDefault(): IModulEntity {
    return {
        id: 0,
        nama: 'root',
        fungsi: [],
        anak: []
    }
}

export async function getModulById(id: number): Promise<IModulEntity> {
    let hasil: IModulEntity = daftar.find((item) => {
        return item.id === id;
    })

    if (!hasil) throw Error('modul not found, id: ' + id);

    return hasil;
}

export async function addModule(modul: IModulEntity): Promise<void> {
    daftar.push(modul);
    simpanModul();
}

export function buatModule(nama: string): IModulEntity {
    let modulBaru: IModulEntity = {
        id: id(),
        nama: nama,
        anak: [],
        fungsi: []
    }

    return modulBaru;
}

export async function loadModulByIdIn(ids: number[]): Promise<IModulEntity[]> {
    let hasil: IModulEntity[] = [];

    if (ids.length == 0) return [];
    for (let i: number = 0; i < ids.length; i++) {
        hasil.push(await getModulById(ids[i]));
    }

    return hasil;
}

const table: string = 'ha.modul.modul';

let daftar: IModulEntity[] = [{
    id: 0,
    nama: 'root',
    fungsi: [],
    anak: []
}];
load();
