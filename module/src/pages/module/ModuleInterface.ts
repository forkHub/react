import { editState } from "./ModuleStore";

export enum EEntityType {
    MODUL = 'modul',
    PROCEDURE = 'procedure',
    VAR = 'var'
}

export interface IModuleData {
    id: number,
    dipilih: number,
    state: editState,

    modulAr: IModulEntity[],
}

export interface IModulEntity {
    id: number,
    nama: string,
    anak: number[],
    type: EEntityType
}

export interface IModulDataProp {
    data: IModulEntity[]
}

export interface IModulprop {
    id: number,
    modul?: IModulEntity;
}

export interface IAction {
    type: string,
    modul?: IModulEntity,
    induk?: number
    id?: number
    diDipilih?: number
}