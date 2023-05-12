import React, { useContext } from 'react';
// import { pageReducer } from '../app/PageReducer';
import { Context, Dispatcher } from '../app/Provider';
import { TData } from '../app/Store';
import { EHal } from '../app/enum';
// import { tagReducer } from '../app/TagReducer';

export function MenuAtas() {
    const data: TData = useContext(Context);
    const dispatcher = useContext(Dispatcher);

    function checkHalAktif(hal: string): string {
        return (data.halAktif == hal ? ' menu-item menu-aktif ' : ' menu-item ');
    }

    return <div className='menu-atas'>
        <button className={checkHalAktif(EHal.PREV)} onClick={() => {

            // pageReducer.pilihHal(dispatch, EHal.PREV);

            dispatcher((data2: TData): TData => {
                data2.halAktif = EHal.PREV;
                return data2;
            });

        }}>preview</button>

        <button className={checkHalAktif(EHal.TAG_TREE)} onClick={() => {

            dispatcher((data2: TData): TData => {
                data2.halAktif = EHal.TAG_TREE;
                return data2;
            });

            // pageReducer.pilihHal(dispatch, EHal.TAG_TREE)

        }}>tree</button>

        <button className={checkHalAktif(EHal.ELM)} onClick={() => {
            // pageReducer.pilihHal(dispatch, EHal.ELM);

            dispatcher((data2: TData): TData => {
                data2.halAktif = EHal.ELM;
                return data2;
            });

        }}>elm</button>
    </div >
}

export function MenuBawah() {
    const data: TData = useContext(Context);

    return <div className='menu-bawah'>
        <MenuKondisi />
    </div>
}

function MenuKondisi() {
    const data: TData = useContext(Context);

    if (data.halAktif == EHal.ELM) {
        return <>
            <button onClick={() => {
                // tagReducer.hapusTag(dispatch, data.idTagAktif);
            }}>tambahkan</button>
        </>
    }
    else if (data.halAktif == EHal.PREV) {
        return <></>
    }
    else if (data.halAktif == EHal.TAG_TREE) {
        return <button onClick={() => {
            //TODO:
        }}>hapus</button>
    }
    else {
        throw Error('');
    }
}