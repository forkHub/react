import React, { useContext } from 'react';
import { Context } from '../app/Provider';
import { TData } from '../app/Store';
// import { pageReducer } from '../app/PageReducer';
import { EHal } from '../app/enum';
import { PilihElement } from './pilihElement/PilihElement';
// import { tagReducer } from '../app/TagReducer';
import { Preview } from './preview/Preview';
import { MenuAtas, MenuBawah } from './Menu';
import { HalTag } from './tagTree/Tag';

function Tengah() {
    const data: TData = useContext(Context);

    if (data.halAktif == EHal.TAG_TREE) {
        return <HalTag />
    }
    else if (data.halAktif == EHal.ELM) {
        return <PilihElement />
    }
    else if (data.halAktif == EHal.PREV) {
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
    let hasil: JSX.Element;

    if (data.halAktif == EHal.ELM) {
        // console.debug('render hal pilih element');
        hasil = <><PilihElement /></>
    }
    else if (data.halAktif == EHal.TAG_TREE) {
        hasil = <HalTag />
    }
    else {
        hasil = <>
            <div className='hal-tag'>
                <MenuAtas />
                <div className='hal-tengah'>
                    <Tengah />
                </div>
                <MenuBawah />
            </div>
        </>
    }

    return hasil;
}