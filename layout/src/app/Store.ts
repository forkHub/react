import { ITag } from "../entities";
import { tagService } from "../service/TagService";
import { EHal } from "./enum";

export type TData = {
    idTagAktif: number,
    idTagDitambahAnak: number,
    idTagBaru: number,
    // body: ITag;
    halAktif: EHal,

    hal2: {
        daftarElement: {
            elDipilih: string,
            teks: string,
        }
    }

    de_dipilih: string,
}

export function getDef(): any {
    return clone(defData);
}

export function clone(data: any): any {
    return JSON.parse(JSON.stringify(data));
}

let defData: TData = {
    halAktif: EHal.TAG_TREE,
    idTagAktif: 0,
    idTagDitambahAnak: 0,
    idTagBaru: 0,
    de_dipilih: '',
    hal2: {
        daftarElement: {
            elDipilih: "",
            teks: '',
        }
    }
}
