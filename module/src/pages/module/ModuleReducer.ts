import { buat, clone, getModulById } from "./ModuleStore";
import { IAction, IModuleData, IModulEntity } from "./ModuleInterface";

export enum Action {
    TAMBAH = 'tambah',
    PILIH = 'pilih',
    EDIT = 'edit'
}

export function ModuleReducer(data: any, action: IAction): IModuleData {

    if (action.type == Action.TAMBAH) {
        let modulBaru: IModulEntity = buat("nama " + Date.now());
        let data2: IModuleData = clone(data);

        data2.modulAr.push(modulBaru);
        getModulById(data2.dipilih, data2).anak.push(modulBaru.id)

        return data2;
    }
    else if (action.type == Action.PILIH) {
        console.log('pilih ' + action.diDipilih);
        let data2: IModuleData = clone(data);
        data2.dipilih = action.diDipilih;

        return data2;
    }
    else if (action.type == Action.EDIT) {
        let data2: IModuleData = clone(data);
        return data2;
    }
    else {
        throw Error('');
    }
}