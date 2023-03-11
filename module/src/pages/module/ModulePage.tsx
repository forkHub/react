import React, { useContext, useEffect, useState } from 'react';
import { Item } from './Item';
import { Menu } from './Menu';
import { TData } from '../../app/Store';
import { Context } from '../../app/Provider';
import * as modulDao from '../../dao/ModulDao';
import { IModulEntity } from '../../entity/Module';

export function ModulePage() {
    const data: TData = useContext(Context);
    const [modul, setModul]: [IModulEntity, any] = useState(null);
    const [modulDipilih, setModulDipilih]: [IModulEntity, any] = useState(null);

    useEffect(() => {
        console.log('use effect');
        console.log(data);
        modulDao.loadModulByIdIn([0, data.idModulAktif])
            .then(([modul, modulDipilih]) => {
                setModul(modul);
                setModulDipilih(modulDipilih);
                console.log(modul);
                console.log(modulDipilih);
            })
            .catch((e) => {
                console.error(e);
                throw Error('');
            });
    }, [data]);

    return <>
        {modul && modulDipilih && <>
            <Item
                key={modul.id}
                modul={modul}></Item>

            <div>
                Selected modul: {modulDipilih.nama} + {modulDipilih.id}
            </div>

            <Menu parentModul={modulDipilih} />
        </>}
    </>

}
