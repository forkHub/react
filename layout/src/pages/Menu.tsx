import React, { useContext } from 'react';
import { pageReducer } from '../app/PageReducer';
import { Context, Dispatch } from '../app/Provider';
import { TData } from '../app/Store';
import { EHal } from '../app/enum';
import { tagReducer } from '../app/TagReducer';

export function MenuAtas() {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);

    return <div className='menu-atas'>
        <button className='menu-item' onClick={() => {
            pageReducer.pilihHal(dispatch, EHal.PREV)
        }}>preview</button>

        <button className='menu-item' onClick={() => {
            pageReducer.pilihHal(dispatch, EHal.TAG_TREE)
        }}>tree</button>

        <button className='menu-item' onClick={() => {
            pageReducer.pilihHal(dispatch, EHal.ELM)
        }}>elm</button>
    </div>
}

export function MenuBawah() {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);

    return <div className='menu-bawah'>
        <MenuKondisi />
    </div>
}

function MenuKondisi() {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);

    if (data.hal == EHal.ELM) {
        return <></>
    }
    else if (data.hal == EHal.PREV) {
        return <></>
    }
    else if (data.hal == EHal.TAG_TREE) {
        return <button onClick={() => {
            tagReducer.hapusTag(dispatch, data.idTagAktif);
        }}>hapus</button>
    }
    else {
        throw Error('');
    }
}

function MenuPilihElm() {

}