import { IBarang } from "./interface";

export class Barang implements IBarang {
    constructor(nama: string) {
        this._nama = nama;
    }

    private _nama: string = '';
    private _jumlah: number = 0;

    public get jumlah(): number {
        return this._jumlah;
    }
    public set jumlah(value: number) {
        this._jumlah = value;
    }

    public get nama(): string {
        return this._nama;
    }
    public set nama(value: string) {
        this._nama = value;
    }
}