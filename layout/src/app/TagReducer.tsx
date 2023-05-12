// import { TAction } from "./Reducer";
// import { TData, clone } from "./Store";
// import { EAction } from "./enum";

// class TagReducer {
//     // reduce(data: TData, action: TAction): TData {
//     //     if (action.type == EAction.TAG_DIPILIH) {
//     //         // return this.tagDipilih(data, action.payload.id)
//     //     }
//     //     else if (action.type == EAction.TAG_DIHAPUS) {
//     //         return this.tagDihapus(data, action.payload.id);
//     //     }
//     //     // else if (action.type == EAction.TAG_ANAK_DITAMBAH) {
//     //     //     return this.anakDitambah(data, action.payload.tag, action.payload.indukId);
//     //     // }
//     //     else {
//     //         throw Error('');
//     //     }
//     // }

//     // tambahAnak(dispatch: React.Dispatch<TAction>, tag: ITag, indukId: number): void {
//     //     console.debug('dispatch tambah anak');
//     //     tagService.tambahAnak(tag, indukId);

//     //     dispatch({
//     //         type: EAction.TAG_ANAK_DITAMBAH,
//     //         payload: {
//     //             tag: tag,
//     //             indukId: indukId
//     //         }
//     //     })
//     // }

//     // private anakDitambah(data: TData, tag: ITag, indukId: number): TData {
//     //     let data2: TData;

//     //     console.log('tag anak ditambah');

//     //     data2 = clone(data);
//     //     data2.body = tagService.getBody();
//     //     data2.idTagDitambahAnak = indukId;
//     //     data2.idTagBaru = tag.id;

//     //     return data2;
//     // }

//     hapusTag(dispatch: React.Dispatch<TAction>, id: number): void {
//         console.log('hapus tag');
//         dispatch({
//             type: EAction.TAG_DIHAPUS,
//             payload: {
//                 id: id
//             }
//         });
//     }

//     private tagDihapus(data: TData, id: number): TData {
//         let data2: TData = clone(data);

//         // data.idTagAktif = id;
//         //TODO:
//         id;

//         // console.log('tag dihapus');

//         return data2;
//     }

//     // pilihTag(dispatch: React.Dispatch<TAction>, id: number): void {
//     //     dispatch({
//     //         type: EAction.TAG_DIPILIH,
//     //         payload: {
//     //             id: id
//     //         }
//     //     });
//     // }

//     // private tagDipilih(data: TData, id: number): TData {
//     //     let data2: TData = clone(data);

//     //     data2.idTagAktif = id;

//     //     return data2;
//     // }
// }

// export const tagReducer: TagReducer = new TagReducer();
