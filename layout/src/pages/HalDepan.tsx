import React, { useContext, useEffect, useState } from 'react';
import { Context, Dispatch } from '../app/Provider';
import { TData } from '../app/Store';
import { reducer2 } from '../app/Reducer2';
import { id } from '../util/Id';
import { tagService } from '../service/TagService';
import { EHal } from '../app/enum';

// class TagObj implements ITag {
//     id: number;
//     nama: string;
//     anak: ITag[] = [];

//     constructor(id: number, nama: string) {
//         this.id = id;
//         this.nama = nama;
//     }
// }

export interface ITag {
    id: number,
    nama: string,
    anak: ITag[]
}

// const tagList: TagObj[] = [
//     new TagObj(id(), 'body')
// ];

function Tag({ tag }: { tag: ITag }) {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);
    const [anak, setAnak]: [ITag[], any] = useState([]);

    function tagKlik(tag: ITag) {
        reducer2.pilihTag(dispatch, tag.id);
    }

    useEffect(() => {
        //TODO: 
        // load anak
        // console.log('tag aktif; ' + data.idTagAktif);
        // console.log('tag id ' + tag.id);
    }, [data.idTagAktif, data.idTagTambahAnak]);

    let itemAnak = anak.map((item: ITag) => {
        return <Tag key={item.id} tag={item}></Tag>
    });


    return <>
        <div>
            <div
                className={"disp-flex " + (data.idTagAktif == tag.id ? "border" : "")}
                onClick={() => {
                    tagKlik(tag);
                }}>
                {tag.nama}
            </div>
            <div className="pad-left-4">{itemAnak}</div>
        </div >
    </>
}

function TagTree() {
    const data: TData = useContext(Context);
    const [tag, setTag]: [ITag, any] = useState(null);
    const dispatch = useContext(Dispatch);

    console.log('tag tree');
    console.log(tag);

    useEffect(() => {
        if (!tag) {
            reducer2.pilihTag(dispatch, data.body.id);
            setTag(data.body);
        }
    }, [])

    return <>
        {tag && <Tag tag={tag} key={tag.id} />}
    </>
}

function Tengah() {
    const data: TData = useContext(Context);

    if (data.hal == EHal.TAG) {
        return <TagTree />
    }
    else if (data.hal == EHal.ELM) {
        return <></>
    }
    else {
        throw Error('');
    }
}

export function HalDepan() {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);
    // const [tag, setTag]: [TagObj, any] = useState(null);

    console.group('Hal Depan');

    // useEffect(() => {

    //     if (data.tagReload) {
    //         //reload tag
    //         if (!tag) {
    //             reducer2.pilihTag(dispatch, data.body.id);
    //             setTag(tag);
    //         }
    //     }
    // }, [])

    //menu atas
    let menuAtas: JSX.Element = <div className='menu-atas'>
        <button onClick={() => { }}>list</button>
        <button onClick={() => { }}>elm</button>
    </div>

    //tengah
    // let tengah = <div className='tengah'>
    //     {tag && <Tag tag={tag} key={tag.id} />}
    // </div>

    //menu bawah
    let menuBawah = <div className='menu-atas'>
        <button onClick={() => {
            reducer2.hapusTag(dispatch, data.idTagAktif);
        }}>hapus</button>
    </div>

    let elm = <>
        <div className='hal-tag'>
            {menuAtas}
            <Tengah />
            {menuBawah}
        </div>
    </>

    console.groupEnd();

    return elm;
}