import React, { useContext, useEffect, useState } from 'react';
import { ClassObj, classService } from '../../service/ClassService';
import { MenuStandard } from '../Menu';
import { Context, Dispatcher } from '../../app/Provider';
import { TData } from '../../app/Store';
import { EHal } from '../../app/enum';
import { FormTambahClass } from './FormTambahClass';

function MenuBawah() {
    const dispatcher = useContext(Dispatcher);

    return <>
        <div>
            <button
                onClick={() => {
                    dispatcher((data: TData) => {
                        data.halAktif = EHal.TAG_TREE;
                        return data;
                    })
                }}
            >|||</button>
        </div>
        <button onClick={() => {
            dispatcher((data: TData) => {
                data.halAktif = EHal.TAMBAH_CLASS;
                return data;
            })
        }}>tambah</button>

    </>
}

function ClassList({ classList }: { classList: ClassObj[] }) {
    const dispatcher = useContext(Dispatcher);
    const data: TData = useContext(Context);

    const list = classList.map((item) => {
        let className = `class-item ${data.idClass == item.id ? "border" : ""}`;
        return <div
            className={className}
            onClick={() => {
                dispatcher((data: TData) => {
                    data.idClass = item.id;
                    return data;
                })
            }}
            key={item.id}>
            {item.nama}
        </div>
    });

    return <>
        {list}
    </>
}

function ClassManager() {
    const [classList, setClassList]: [ClassObj[], any] = useState([])

    useEffect(() => {
        setClassList(classService.load());

        return () => { };
    }, []);

    return <>
        <h1>Class Manager</h1>
        <div className='classlist-cont'>
            <ClassList classList={classList} />
        </div>
        <MenuBawah />
    </>
}

export function HalClassRouter() {
    const data = useContext(Context);

    if (data.halAktif == EHal.CLASS_MANAGER) {
        return <ClassManager />
    }
    else if (data.halAktif == EHal.TAMBAH_CLASS) {
        return <FormTambahClass />
    }
    else {
        throw Error('hal aktif tidak sesuai, ' + data.halAktif);
    }

}