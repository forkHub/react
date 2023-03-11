import { clone, EHal, IData } from "../../app/Store";
import { buat, getModulById, IModulEntity } from "../../entity/Module";
import { IAction, EAction } from "../../app/Reducer";

export function pilihModul(dispatch: React.Dispatch<IAction>, modul: IModulEntity): void {
    dispatch({
        type: EAction.MODUL_DIPILIH,
        modul: modul
    });
}

export function handleModuleDipilih(data: IData, modul: IModulEntity): IData {
    let data2 = clone(data);
    data2.idModulDipilih = modul.id;

    return data2;
}


export function tambahModul(dispatch: React.Dispatch<IAction>, modul: IModulEntity, induk: IModulEntity): void {

    dispatch({
        type: EAction.MODUL_TAMBAH,
        induk: induk,
        modul: modul
    });
}

export function handleModuleDitambah(data: IData, modulBaru: IModulEntity, induk: IModulEntity): IData {

    let data2: IData = clone(data);
    data2.modulAr.push(modulBaru);
    getModulById(induk.id, data2).anak.push(modulBaru.id);

    return data2;
}

export function editModul(dispatch: React.Dispatch<IAction>) {
    dispatch({
        type: EAction.MODUL_EDIT_MULAI
    });
}

export function handleModuleDiedit(data: IData): IData {
    let data2 = clone(data);
    data2.hal = EHal.MODUL_EDIT;
    return data2;
}
