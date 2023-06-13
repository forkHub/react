import React, { useContext } from 'react';
// import { pageReducer } from '../../app/PageReducer';
import { Context, Dispatcher } from '../../app/Provider';
import { TData } from '../../app/Store';
import { id } from '../../util/Id';
import { EHal } from '../../app/enum';
// import { tagReducer } from '../../app/TagReducer';
import { MenuAtas } from '../Menu';
import { tagService } from '../../service/TagService';
import { ITag } from '../../entities';

function MenuBawah() {
    const data: TData = useContext(Context);
    const dispatcher = useContext(Dispatcher);

    // dispatcher()
    // dispatcher()

    function tambahKlik(): void {
        if (data.hal2.daftarElement.elDipilih != '') {
            console.debug('tambah anak, ', data.idTagAktif);
            const tagBaru: ITag = {
                anak: [],
                id: id(),
                class: '',
                nama: data.hal2.daftarElement.elDipilih,
                teks: data.hal2.daftarElement.teks,
                classAttr: [],
                idAttr: '',
                styleAttr: []
            }

            tagService.tambahAnak(tagBaru, data.idTagAktif);

            dispatcher((data: TData): TData => {
                data.idTagDitambahAnak = data.idTagAktif;
                data.idTagBaru = tagBaru.id;
                return data;
            });

            // dispatch(createAction(data, (data: TData): TData => {
            //     data.idTagDitambahAnak = data.idTagAktif;
            //     // data.body = tagService.getBody();
            //     data.idTagBaru = tagBaru.id;
            //     return data;
            // }));

            // tagReducer.tambahAnak(dispatch, {
            //     anak: [],
            //     id: id(),
            //     nama: data.hal2.daftarElement.elDipilih,
            //     teks: data.hal2.daftarElement.teks,
            //     classAttr: [],
            //     idAttr: '',
            //     styleAttr: []
            // }, data.idTagAktif);

            // pageReducer.pilihHal(dispatch, EHal.TAG_TREE);

            dispatcher((data2: TData): TData => {
                data2.halAktif = EHal.TAG_TREE;
                return data2;
            })

            dispatcher((data2: TData): TData => {
                data2.hal2.daftarElement.teks = '';
                return data2;
            });

            // dispatch(createAction(data, (data): TData => {
            //     data.hal2.daftarElement.teks = '';
            //     return data;
            // }))
        }
        else {
            console.warn('tidak ada element untuk ditambahkan');
        }
    }

    return <>
        <div className='menu-bawah'>
            <button
                onClick={() => { tambahKlik(); }}
            >tambahkan</button>
        </div>

    </>
}

function BuatTag({ nama }: { nama: string }) {
    const data: TData = useContext(Context);
    const dispatcher = useContext(Dispatcher);

    function getClassName(): string {
        if (data.hal2.daftarElement.elDipilih == nama) {
            return 'tag tag-dipilih dipilih'
        }
        else {
            return 'tag tag-dipilih'
        }
    }

    function klik(): void {
        dispatcher((data: TData): TData => {
            data.hal2.daftarElement.elDipilih = nama;
            return data;
        });

        // dispatch(createAction(data, (data: TData): TData => {
        //     data.hal2.daftarElement.elDipilih = nama;
        //     return data;
        // }))
    }

    return <>
        <button
            className={getClassName()}
            onClick={() => { klik() }}

        >{nama}</button ><br />
    </>
}

function Teks({ nama }: { nama: string }) {
    const data: TData = useContext(Context);
    // const dispatch = useContext(Dispatch);
    const dispatcher = useContext(Dispatcher);
    // const [value, setValue] = useState('');

    return <>
        <textarea
            value={data.hal2.daftarElement.teks}
            onChange={(e) => {
                // setValue(e.target.value);

                dispatcher((data): TData => {
                    data.hal2.daftarElement.teks = e.target.value;
                    return data;
                });

                // dispatch(createAction(data, (data): TData => {
                //     data.hal2.daftarElement.teks = e.target.value;
                //     return data;
                // }));

            }}
            onClick={() => {

                dispatcher((data): TData => {
                    data.hal2.daftarElement.elDipilih = nama;
                    return data;
                });

                // dispatch(createAction(data, (data): TData => {
                //     data.hal2.daftarElement.elDipilih = nama;
                //     return data;
                // }))
            }}
        ></textarea>
    </>
}

export function PilihElement() {

    return <>
        <div className='hal-pilih-element'>
            <MenuAtas />
            <div className='tag-list'>
                <BuatTag nama='div' />
                <BuatTag nama='button' />
                <BuatTag nama='ul' />
                <BuatTag nama='li' />
                <Teks nama='teks' />
            </div>
            <MenuBawah />
        </div>
    </>
}