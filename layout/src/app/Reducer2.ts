import React from "react";
import { TAction } from "./Reducer";
import { TData, clone } from "./Store";
import { EAction } from "./enum";
import { ITag } from "../pages/HalDepan";
import { tagService } from "../service/TagService";

class Reducer {
    reduce(data: TData, action: TAction): TData {
        console.log('reducer 2 ' + action.type);
        if (action.type == EAction.TAG_DIPILIH) {
            return this.tagDipilih(data, action.payload.id)
        }
        else if (action.type == EAction.TAG_DIHAPUS) {
            return this.tagDihapus(data, action.payload.id);
        }
        else if (action.type == EAction.TAG_ANAK_DITAMBAH) {
            return this.anakDitambah(data, action.payload.tag, action.payload.indukId);
        }
        else {
            throw Error('');
        }
    }

    tambahAnak(dispatch: React.Dispatch<TAction>, tag: ITag, indukId: number): void {
        dispatch({
            type: EAction.TAG_ANAK_DITAMBAH,
            payload: {
                tag: tag,
                indukId: indukId
            }
        })
    }

    private anakDitambah(data: TData, tag: ITag, indukId: number): TData {
        let data2: TData;

        console.log('tag anak ditambah');
        tagService.tambah(tag, indukId);

        data2 = clone(data);
        data2.idTagTambahAnak = indukId;

        return data2;
    }

    // //diganti jadi reload
    // tambahTag(dispatch: React.Dispatch<TAction>, tag: ITag): void {
    //     dispatch({
    //         type: EAction.TAG_DITAMBAH,
    //         payload: {
    //             tag: tag
    //         }
    //     })
    // }

    // //diganti jadi reload
    // private tagDitambah(data: TData, tag: ITag): TData {
    //     let data2: TData = clone(data);

    //     console.log('tag ditambah');
    //     // data2.body.push(tag);
    //     //TODO:

    //     return data2;
    // }

    hapusTag(dispatch: React.Dispatch<TAction>, id: number): void {
        console.log('hapus tag');
        dispatch({
            type: EAction.TAG_DIHAPUS,
            payload: {
                id: id
            }
        });
    }

    private tagDihapus(data: TData, id: number): TData {
        let data2: TData = clone(data);

        // data.idTagAktif = id;
        //TODO:
        id;

        console.log('tag dihapus');

        return data2;
    }

    pilihTag(dispatch: React.Dispatch<TAction>, id: number): void {
        dispatch({
            type: EAction.TAG_DIPILIH,
            payload: {
                id: id
            }
        });
    }

    private tagDipilih(data: TData, id: number): TData {
        let data2: TData = clone(data);

        data2.idTagAktif = id;
        data2.idTagTambahAnak = id;

        console.log('tag dipilih ' + id);
        console.log(data2);

        return data2;
    }
}

export const reducer2: Reducer = new Reducer();