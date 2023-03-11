import React, { useContext } from 'react';
import { Item } from './Item';
import { Menu } from './Menu';
import { TData } from '../../app/Store';
import { Context } from '../../app/Provider';

export function ModulePage() {
    const data: TData = useContext(Context);

    return <>
        <Item
            key={data.modulAr[0].id}
            modul={data.modulAr[0]}></Item>

        <div>
            Selected modul: {data.modulAktif.nama} + {data.modulAktif.id}
        </div>

        <Menu />
    </>

}