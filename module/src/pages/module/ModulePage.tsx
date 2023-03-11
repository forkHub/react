import React, { useContext } from 'react';
import { Item } from './Item';
import { Menu } from './Menu';
import { Context } from '../../app/Context';
import { IData } from '../../app/Store';
import { getModulById } from '../../entity/Module';

export function ModulePage() {
    const data: IData = useContext(Context);

    return <>
        <Item
            key={data.modulAr[0].id}
            id={data.modulAr[0].id}
        ></Item>
        <hr />

        <div>
            Selected modul: {getModulById(data.idModulDipilih, data).nama} - modul dipilih {data.idModulDipilih}
        </div>

        <Menu />
    </>

}