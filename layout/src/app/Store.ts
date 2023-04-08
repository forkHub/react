import { ITag } from "../entities";
import { tagService } from "../service/TagService";
import { EHal } from "./enum";

export type TData = {
    // id: number;
    // idModulAktif: number;
    // idFungsiAktif: number;
    // moduleEntityUpdateId: number;
    // tagReload: boolean;

    idTagAktif: number,
    idTagDitambahAnak: number,
    idTagBaru: number,
    body: ITag;
    hal: EHal,
}

export function getDef(): TData {
    return clone(defData);
}

export function clone(data: TData): TData {
    return JSON.parse(JSON.stringify(data));
}

let defData: TData = {
    hal: EHal.TAG_TREE,
    // id: 0,
    // idModulAktif: 0,
    // idFungsiAktif: 0,
    // moduleEntityUpdateId: 0,
    idTagAktif: 0,
    idTagDitambahAnak: 0,
    idTagBaru: 0,
    body: tagService.getBody(),
    // tagReload: true,
}
