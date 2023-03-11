import { cloneModule, IModulEntity } from "../entity/Module";

export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit'
}

export type IData = {
    hal: EHal,
    // idModulDipilih: number,
    modulAktif: IModulEntity,
    modulAr: IModulEntity[],
}

export function getDef(): IData {
    return clone(defData);
}

export function clone(data: IData): IData {
    console.log('clone: ');
    console.log(data);

    return {
        ...data,
        modulAr: data.modulAr.map((item) => { return cloneModule(item) })
    }
}

export function simpan(data: IData): void {
    window.localStorage.setItem('ha.modul', JSON.stringify(data));
}

export function load(): IData {
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

let defData: IData = {
    hal: EHal.MODUL,
    modulAktif: null,
    modulAr: [{
        id: 0,
        anak: [],
        nama: 'root',
    }]
}
defData.modulAktif = defData.modulAr[0];

defData = load();