import { id } from "../util/Id";
import { conf } from "./Configurasi";
import { data } from "./Data";
import { Proses } from "./Proses";
import { EBarang, EGedung, EState } from "./enum";
import { IGedung, IProses } from "./interface";

export class Gedung implements IGedung {

    protected _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    protected _type: string;
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    stateAr: IProses[];
    stateAktif: string;

    protected _hasil: string;
    public get hasil(): string {
        return this._hasil;
    }
    public set hasil(value: string) {
        this._hasil = value;
    }
    produksi: IProses;

    constructor() {
        this.id = id();
        this.produksi = new Proses();
    }

    update(): void {
        this.produksi.update();
    };
}

export class Sumur extends Gedung {
    private _stateAr: IProses[] = [];
    private _stateAktif: string = '';

    constructor() {
        super();
        this._type = EGedung.sumur;
        this._stateAktif = EState.produksi;
        this.produksi.posisiMaks = conf.sumur.produksi.waktu;

        this.produksi.selesai = () => {
            // console.log('selesai');
            this.produksi.posisi = 0;
            this.produksi.aktif = true;
            data.air.jumlah++;
        }
    }

    override update(): void {
        super.update();
    }
}

export class Pinus extends Gedung {
    constructor() {
        super();
        this.type = 'pinus';
        this.produksi.posisiMaks = conf.pinus.produksi.waktu;

        this.produksi.selesai = () => {
            data.pinus.jumlah++;
        }
    }

    mulai(): void {
        if (this.produksi.aktif == false) {
            if (data.air.jumlah > 0) {
                data.air.jumlah--;
                this.produksi.aktif = true;
                this.produksi.posisi = 0;
            }
        }
    }

    override update(): void {
        super.update();
        this.mulai();
    }

}
