import React, { useContext } from 'react';
import { Item } from './Item';
import { Menu } from './Menu';
import { TData } from '../../app/Store';
import { Context } from '../../app/Provider';
import * as modulDao from '../../dao/ModulDao';
import { IModulEntity } from '../../entity/Module';

export function ModulePage() {
    const data: TData = useContext(Context);
    let modul: IModulEntity = modulDao.getModulById(0);
    let modulDipilih: IModulEntity = modulDao.getModulById(data.idModulDipilih);

    return <>
        <Item
            key={modul.id}
            modul={modul}></Item>

        <div>
            Selected modul: {modulDipilih.nama} + {modulDipilih.id}
        </div>

        <Menu />
    </>

}
