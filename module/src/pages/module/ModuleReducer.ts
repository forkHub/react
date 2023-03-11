import { IModulAction } from "./ModuleInterface";
import { clone, EHal, IMainData } from "../main/MainStore";
import { buat, getModulById, IModulEntity } from "../../entity/Module";
import { IMainAction, EMainAction } from "../main/MainReducer";

export function pilihModul(dispatcher: React.Dispatch<IMainAction>, modul: IModulEntity): void {

    dispatcher({
        type: EMainAction.MODUL_DIPILIH,
        modul: modul
    });
}

export function handleModuleDipilih(data: IMainData, modul: IModulEntity): IMainData {
    let data2 = clone(data);
    data2.idModulDipilih = modul.id;

    return data2;
}


export function tambahModul(dispatcher: React.Dispatch<IMainAction>, modul: IModulEntity, induk: IModulEntity): void {

    dispatcher({
        type: EMainAction.MODUL_TAMBAH,
        induk: induk,
        modul: modul
    });
}

export function handleModuleDitambah(data: IMainData, modulBaru: IModulEntity, induk: IModulEntity): IMainData {

    let data2: IMainData = clone(data);
    data2.modulAr.push(modulBaru);
    getModulById(induk.id, data2).anak.push(modulBaru.id);

    return data2;
}


export function handleModuleDiedit(data: IMainData): IMainData {
    let data2 = clone(data);
    data2.hal = EHal.MODUL_EDIT;
    return data2;
}
