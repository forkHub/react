import { EState } from "./enum";
import { IProses } from "./interface";


export class Proses implements IProses {
    readonly nama: string = EState.produksi; //TODO: hapus

    aktif: boolean = false;
    posisi: number = 0;
    private _posisiMaks: number = 100;
    public get posisiMaks(): number {
        return this._posisiMaks;
    }
    public set posisiMaks(value: number) {
        this._posisiMaks = value;
    }
    private _selesai: () => void;

    public set selesai(value: () => void) {
        this._selesai = value;
    }

    constructor() {

    }

    mulai(): void {
        this.aktif = true;
        this.posisi = 0;
    }

    update(): void {
        if (this.aktif) {
            this.posisi++;
            if (this.posisi >= this.posisiMaks) {
                this.aktif = false;
                this.posisi = 0;
                if (this._selesai) {
                    this._selesai();
                }
            }
        }
    }
}
