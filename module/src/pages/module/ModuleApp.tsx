import React, { useContext } from 'react';
import { Item } from './Item';
import { Menu } from './Menu';
import { MainContext } from '../main/MainContext';
import { IMainData } from '../main/MainStore';
import { getModulById } from '../../entity/Module';

export function ModuleApp() {

    return <>
        <Content />
    </>
}

function Content() {
    const data: IMainData = useContext(MainContext);

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