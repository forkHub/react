import React, { useContext } from 'react';
import { Context, Dispatch } from '../../app/Provider';
import { getModulById } from '../../dao/ModulDao';
import { IModulEntity } from '../../entity/Module';

export function EditFungsiPage() {
    const data = useContext(Context);
    const dispatch = useContext(Dispatch);

    let modul: IModulEntity = getModulById(data.idModulDipilih);

    return <>
        <div>
            {modul.nama} / {data.fungsi.nama}
        </div>
        <div>

        </div>
    </>
}