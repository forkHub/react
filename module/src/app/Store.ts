import { cloneModule, IModulEntity } from "../entity/Module";

export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit'
}

export type IData = {
    hal: EHal,
    idModulDipilih: number,
    modulAr: IModulEntity[],
}

let defData: IData = {
    hal: EHal.MODUL,
    idModulDipilih: 0,
    modulAr: [{
        id: 0,
        anak: [],
        nama: 'root',
    }]
}

export function getDef(): IData {
    return clone(defData);
}

export function clone(data: IData): IData {
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
        return JSON.parse(window.localStorage.getItem('ha.modul'));
    }
    catch (e) {
        console.log(e);
        return getDef();
    }
}

defData = load();