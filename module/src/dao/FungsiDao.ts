import { TDekFungsi } from "../entity/DekFungsi";
import { id } from "../util/Id";

export function simpanFungsi(): void {
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
            daftar.push(buatFungsiDefault());
            simpanFungsi();
        }
    }
    catch (e) {
        daftar.push(buatFungsiDefault());
        simpanFungsi();
        console.log(e);
    }
}

function buatFungsiDefault(): TDekFungsi {
    return {
        id: 0,
        nama: 'fungsi',
        anak: []
    }
}

export function getFungsiById(id: number): TDekFungsi {
    let hasil: TDekFungsi = daftar.find((item) => {
        return item.id === id;
    })

    if (!hasil) throw Error('fungsi not found, id: ' + id);

    return hasil;
}

export function addFungsi(fungsi: TDekFungsi): void {
    daftar.push(fungsi);
    simpanFungsi();
}

export function buatFungsi(nama: string): TDekFungsi {
    let fungsi: TDekFungsi = {
        id: id(),
        nama: nama,
        anak: [],
    }

    return fungsi;
}

export function loadFungsiByIdIn(ids: number[]): TDekFungsi[] {
    if (ids.length == 0) return [];

    return daftar.filter((item: TDekFungsi) => {
        let ok: boolean = false;
        ids.forEach((id: number) => {
            if (item.id == id) ok = true;
        });

        return ok;
    });
}

const table: string = 'ha.modul.fungsi';

let daftar: TDekFungsi[] = [{
    id: 0,
    nama: 'root',
    anak: []
}];

load();