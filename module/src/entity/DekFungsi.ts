import { id } from "../util/Id"

export type TDekFungsi = {
    id: number,
    nama: string,
    anak: number[]
}

export function buat(name: string): TDekFungsi {
    return {
        id: id(),
        nama: name,
        anak: []
    }
}

export function loadByIdIn(ids: number[], data: TDekFungsi[]): TDekFungsi[] {
    return data.filter((item: TDekFungsi) => {

        let ok: boolean = false;
        ids.forEach((id: number) => {
            if (id == item.id) {
                ok = true;
            }
        })

        return ok;
    });
}

export function getById(id: number, data: TDekFungsi[]): TDekFungsi {
    let hasil: TDekFungsi;

    hasil = data.find((item) => { item.id == id });
    if (!hasil) throw Error('fungsi not found, id ' + id);

    return hasil;
}