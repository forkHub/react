import React, { useContext, useEffect, useRef, useState } from 'react';
import { tagService } from '../../service/TagService';
import { Context, Dispatcher } from '../../app/Provider';
import { TData } from '../../app/Store';
import { EHal } from '../../app/enum';

export function EditTag() {
    const dispatch = useContext(Dispatcher);

    console.log('edit tag');

    return <div className="edit-tag">
        <EditNamaTag />
        <EditClassTag />
        <EditAttributeTag />
        <div>
            <button
                onClick={() => {
                    dispatch((data: TData): TData => {
                        data.halAktif = EHal.TAG_TREE;
                        return data;
                    })
                }}
            >
                OK
            </button>
        </div>
    </div>
}

function EditClassTag() {
    const data = useContext(Context);
    const [namaClass, setNamaClass] = useState('');

    useEffect(() => {
        let nama = tagService.getById(data.idTagAktif).class;
        if (!nama) nama = '';
        setNamaClass(nama);

        return () => { }
    }, [])

    return (
        <>
            Edit Class Tag:<br />
            <form
                onSubmit={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    try {
                        //TODO: ubah nama tag
                        let tag = tagService.getById(data.idTagAktif);
                        tag.class = namaClass;
                        tagService.simpan();
                        
                        console.log('class diedit, ' + namaClass);
                    }
                    catch (e) {
                        console.warn(e);
                    }

                    return false;
                }}>

                <div>
                    class:
                </div>
                <div>
                    <input type="text" value={namaClass} onChange={(e) => {
                        // e;
                        setNamaClass(e.target.value);
                    }} />
                </div>
                <div>
                    <input type='submit' value={"OK"} />
                </div>

            </form>
        </>

    )
}

function EditNamaTag() {
    const data = useContext(Context);
    const [nama, setNama] = useState('');

    useEffect(() => {
        let nama = tagService.getById(data.idTagAktif).nama;
        setNama(nama);

        return () => { }
    }, [])

    return (
        <>
            Edit Nama Tag:<br />
            <form
                onSubmit={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    try {
                        //TODO: ubah nama tag
                        let tag = tagService.getById(data.idTagAktif);
                        tag.nama = nama;

                    }
                    catch (e) {
                        console.warn(e);
                    }

                    return false;
                }}>

                <div>
                    nama:
                </div>
                <div>
                    <input type="text" value={nama} onChange={(e) => {
                        // e;
                        setNama(e.target.value);
                    }} />
                </div>
                <div>
                    <input type='submit' value={"OK"} />
                </div>

            </form>
        </>

    )
}

function EditAttributeTag() {
    return <>
        Edit Attribute Tag<br />
        <div className='attribute-list'>

        </div>
        <div className='tombol-cont'>
            <button>tambah</button>
            <button>edit</button>
            <button>hapus</button>
        </div>
    </>
}