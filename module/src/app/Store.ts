import { clone as cloneFungsi, TDekFungsi } from "../entity/DekFungsi";
import { buatModule, cloneModule, IModulEntity } from "../entity/Module";

export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit',
    FUNGSI_EDIT = 'fungsi_edit'
}

export type TData = {
    hal: EHal,

    modulAr: IModulEntity[],
    dekFungsiAr: TDekFungsi[]

    fungsi: TDekFungsi,
    modulAktif: IModulEntity,
}

export function getDef(): TData {
    return clone(defData);
}

export function clone(data: TData): TData {
    return {
        ...data,

        modulAktif: cloneModule(data.modulAktif),
        fungsi: cloneFungsi(data.fungsi),

        modulAr: data.modulAr.map((item) => { return cloneModule(item) }),
        dekFungsiAr: data.dekFungsiAr.map((item) => { return cloneFungsi(item) }),
    }
}

export function simpan(data: TData): void {
    window.localStorage.setItem('ha.modul', JSON.stringify(data));
}

export function load(): TData {
    console.log('load');

    try {
        let data: string = window.localStorage.getItem('ha.modul');
        if (data) {
            return JSON.parse(window.localStorage.getItem('ha.modul'));
        }
        throw Error('');
    }
    catch (e) {
        console.log(e);
        return getDef();
    }
}

let defData: TData = {
    hal: EHal.MODUL,
    modulAktif: null,
    fungsi: null,
    modulAr: [buatModule('root')],
    dekFungsiAr: []
}
defData.modulAktif = defData.modulAr[0];

defData = load();
