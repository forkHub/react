import { IModulEntity } from "../../entity/Module"

export enum EEntityType {
    MODUL = 'modul',
    PROCEDURE = 'procedure',
    VAR = 'var'
}

export interface IModulAction {
    type: string,
    modul?: IModulEntity,
    induk?: IModulEntity
}