import { ITag } from "../pages/HalDepan";
import { tagService } from "../service/TagService";
import { EHal } from "./enum";

export type TData = {
    hal: EHal,
    id: number;
    idModulAktif: number;
    idFungsiAktif: number;
    moduleEntityUpdateId: number;

    idTagAktif: number,
    idTagTambahAnak: number,
    body: ITag;
    tagReload: boolean;
}

export function getDef(): TData {
    return clone(defData);
}

export function clone(data: TData): TData {
    data.body = tagService.getBody();
    return JSON.parse(JSON.stringify(data));
}

let defData: TData = {
    hal: EHal.TAG,
    id: 0,
    idModulAktif: 0,
    idFungsiAktif: 0,
    moduleEntityUpdateId: 0,
    idTagAktif: 0,
    idTagTambahAnak: 0,
    body: tagService.getBody(),
    tagReload: true
}
