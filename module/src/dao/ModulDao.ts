import { IModulEntity } from "../entity/Module";
import { id } from "../util/Id";

export function simpanModul(): void {
    window.localStorage.setItem(table, JSON.stringify(daftar));
}

export function load(): void {
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

export function getModulById(id: number): IModulEntity {
    let hasil: IModulEntity = daftar.find((item) => {
        return item.id === id;
    })

    if (!hasil) throw Error('modul not found, id: ' + id);

    return hasil;
}

export function addModule(modul: IModulEntity): void {
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

export function loadModulByIdIn(ids: number[]): IModulEntity[] {
    if (ids.length == 0) return [];

    return daftar.filter((item: IModulEntity) => {
        let ok: boolean = false;
        ids.forEach((id: number) => {
            if (item.id == id) ok = true;
        });

        return ok;
    });
}

const table: string = 'ha.modul.modul';

let daftar: IModulEntity[] = [{
    id: 0,
    nama: 'root',
    fungsi: [],
    anak: []
}];
load();
