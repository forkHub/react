import { Barang } from "./Barang";
import { Pinus, Sumur } from "./Gedung";
import { EBarang } from "./enum";
import { IBarang, IData, IGedung } from "./interface";

class Data implements IData {
    readonly barangAr: IBarang[] = [];
    readonly gedungAr: IGedung[] = [];
    private _air: IBarang;
    private _pinus: IBarang;

    public get pinus(): IBarang {
        return this._pinus;
    }
    public set pinus(value: IBarang) {
        this._pinus = value;
    }

    constructor() {
        this.default();
        this._air = new Barang(EBarang.air);
        this._pinus = new Barang(EBarang.pinus);
    }

    update(): void {
        this.gedungAr.forEach((item) => {
            item.update();
        })
    }

    default() {
        let sumur: Sumur = new Sumur();
        sumur.produksi.aktif = true;
        this.gedungAr.push(sumur);

        let pinus: Pinus = new Pinus();
        this.gedungAr.push(pinus);
    }

    public get air(): IBarang {
        return this._air;
    }
    public set air(value: IBarang) {
        this._air = value;
    }
}

export const data: Data = new Data();