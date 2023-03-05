export interface IModulEntity {
    id: number,
    nama: string,
    anak: number[]
}

export interface IModulDataProp {
    data: IModulEntity[]
}

export const modulAr: IModulEntity[] = [];