import * as table from "../dao/ModulTable";
import { id } from "../util/Id";

//TODO: hapus array
export type IModulEntity = {
    id: number,
    nama: string,
    anak: number[],
    fungsi: number[],
    indukId: number,
}

export function buatModule(nama: string, indukId: number): IModulEntity {
    let modulBaru: IModulEntity = {
        id: id(),
        nama: nama,
        anak: [],
        fungsi: [],
        indukId: indukId,
    }

    return modulBaru;
}

export async function hapus(modul: IModulEntity): Promise<void> {
    await table.hapusModul(modul);
}

export async function simpan(modul: IModulEntity): Promise<void> {
    await table.tambah(modul);
}


