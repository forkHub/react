export interface IProses {
    nama: string,
    aktif: boolean,
    posisi: number,
    posisiMaks: number

    update: () => void
    selesai: () => void
}

export interface IBarang {
    nama: string,
    jumlah: number
}

export interface IData {
    barangAr: IBarang[],
    gedungAr: IGedung[],

    air: IBarang
}

export interface IGedung {
    id: number,
    type: string,
    stateAr: IProses[],
    stateAktif: string,
    hasil: string,

    produksi: IProses

    update: () => void
}