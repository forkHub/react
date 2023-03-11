import React, { useContext } from 'react';
import { Context, Dispatch } from '../../app/Provider';
import { getFungsiById } from '../../dao/FungsiDao';
import { getModulById } from '../../dao/ModulDao';
import { TDekFungsi } from '../../entity/DekFungsi';
import { IModulEntity } from '../../entity/Module';

export function EditFungsiPage() {
    const data = useContext(Context);
    const dispatch = useContext(Dispatch);

    let modul: IModulEntity = getModulById(data.idModulAktif);
    let fungsi: TDekFungsi = getFungsiById(data.idFungsiAktif);

    return <>
        <div>
            modul: {modul.nama} /fungsi {fungsi.nama}
        </div>
        <div>

        </div>
    </>
}