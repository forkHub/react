import React, { useContext } from 'react';
import { Context } from '../app/Provider';
import { TData } from '../app/Store';
// import { pageReducer } from '../app/PageReducer';
import { EHal } from '../app/enum';
import { PilihElement } from './pilihElement/PilihElement';
// import { tagReducer } from '../app/TagReducer';
import { Preview } from './preview/Preview';
import { MenuAtas, MenuBawah } from './Menu';
import { TagRouter } from './tagTree/Tag';
import { HalClassRouter } from './classCrud/HalClass';

function Tengah() {
    const data: TData = useContext(Context);

    if (data.halAktif == EHal.TAG_TREE) {
        return <></> //TODO: dihapus
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

function getTag(tag: string): string {
    let idx: number = tag.indexOf('/');
    if (idx < 0) return '';

    return tag.slice(0, idx);
}

export function HalDepan() {
    const data: TData = useContext(Context);
    let hasil: JSX.Element;
    let tag = getTag(data.halAktif);

    if (tag == 'class') {
        return <HalClassRouter />
    }
    else if (tag == 'tag') {
        return <TagRouter hal={data.halAktif} />
    }

    if (data.halAktif == EHal.ELM) {
        // console.debug('render hal pilih element');
        hasil = <><PilihElement /></>
    }
    else if (data.halAktif == EHal.CLASS_MANAGER) {
        hasil = <HalClassRouter />
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
