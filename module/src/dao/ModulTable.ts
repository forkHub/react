import { IModulEntity } from "../entity/Module";

function commitModul(): void {
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
            commitModul();
        }
    }
    catch (e) {
        daftar.push(buatModuleDefault());
        commitModul();
        console.log(e);
    }
}

function buatModuleDefault(): IModulEntity {
    return {
        id: 0,
        nama: 'root',
        indukId: -1,
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

export async function tambah(modul: IModulEntity): Promise<void> {
    daftar.push(modul);
    commitModul();
}

export async function loadModulByIdIn(ids: number[]): Promise<IModulEntity[]> {
    let hasil: IModulEntity[] = [];

    if (ids.length == 0) return [];
    for (let i: number = 0; i < ids.length; i++) {
        hasil.push(await getModulById(ids[i]));
    }

    return hasil;
}

export async function hapusModul(modul: IModulEntity): Promise<void> {
    daftar = daftar.filter((item) => {
        return (item.id != modul.id)
    });
    commitModul();
}

const table: string = 'ha.modul.modul';

let daftar: IModulEntity[] = [{
    id: 0,
    nama: 'root',
    indukId: -1,
    fungsi: [],
    anak: []
}];

load();
