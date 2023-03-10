import React, { useContext } from 'react';
import { Item } from './Item';
import { ModuleContext } from './ModuleContex';
import { Menu } from './Menu';
import { ModuleProvider } from './ModuleProvider';
import { getModulById } from './ModuleStore';
import { IModuleData } from './ModuleInterface';

export function ModuleApp() {
    return <>
        <ModuleProvider>
            <Content />
        </ModuleProvider>
    </>
}

function Content() {
    const dataProp: IModuleData = useContext(ModuleContext);

    return <>
        <Item
            key={dataProp.modulAr[0].id}
            id={dataProp.modulAr[0].id}
        ></Item>
        <hr />

        <div>
            Selected modul: {getModulById(dataProp.dipilih, dataProp).nama} - modul dipilih {dataProp.dipilih}
        </div>

        <Menu />
    </>

}