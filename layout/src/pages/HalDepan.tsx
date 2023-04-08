import React, { useContext } from 'react';
import { Context, Dispatch } from '../app/Provider';
import { TData } from '../app/Store';
import { pageReducer } from '../app/PageReducer';
import { EHal } from '../app/enum';
import { TagTree } from './Tag';
import { PilihElement } from './PilihElement';
import { tagReducer } from '../app/TagReducer';
import { Preview } from './Preview';
import { MenuAtas, MenuBawah } from './Menu';

function Tengah() {
    const data: TData = useContext(Context);

    if (data.hal == EHal.TAG_TREE) {
        return <TagTree />
    }
    else if (data.hal == EHal.ELM) {
        return <PilihElement />
    }
    else if (data.hal == EHal.PREV) {
        return <Preview />
    }
    else {
        throw Error('');
    }
}

// function MenuAtas() {
//     const data: TData = useContext(Context);
//     const dispatch = useContext(Dispatch);

//     return <div className='menu-atas'>
//         <button className='menu-item' onClick={() => {
//             pageReducer.pilihHal(dispatch, EHal.PREV)
//         }}>preview</button>

//         <button className='menu-item' onClick={() => {
//             pageReducer.pilihHal(dispatch, EHal.TAG)
//         }}>tree</button>

//         <button className='menu-item' onClick={() => {
//             pageReducer.pilihHal(dispatch, EHal.ELM)
//         }}>elm</button>


//     </div>
// }

// function MenuBawah() {
//     const data: TData = useContext(Context);
//     const dispatch = useContext(Dispatch);

//     return <div className='menu-bawah'>
//         <button onClick={() => {
//             tagReducer.hapusTag(dispatch, data.idTagAktif);
//         }}>hapus</button>
//     </div>
// }

export function HalDepan() {
    const data: TData = useContext(Context);

    let elm = <>
        <div className='hal-tag'>
            <MenuAtas />
            <div className='hal-tengah'>
                <Tengah />
            </div>
            <MenuBawah />
        </div>
    </>

    return elm;
}