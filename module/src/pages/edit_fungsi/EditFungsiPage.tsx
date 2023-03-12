import React, { useContext, useEffect, useState } from 'react';
import { Context, Dispatch } from '../../app/Provider';
import { TData } from '../../app/Store';
import { getFungsiById } from '../../dao/FungsiDao';
import { getModulById } from '../../dao/ModulTable';
import { TDekFungsi } from '../../entity/DekFungsi';
import { IModulEntity } from '../../entity/Module';

async function load(data: TData): Promise<[IModulEntity, TDekFungsi]> {
    const modul: IModulEntity = await getModulById(data.idModulAktif);
    const fungsi: TDekFungsi = getFungsiById(data.idFungsiAktif);

    return [modul, fungsi];
}

export function EditFungsiPage() {
    const data = useContext(Context);
    // const dispatch = useContext(Dispatch);

    const [modul, setModul] = useState(null);
    const [fungsi, setFungsi] = useState(null);

    useEffect(() => {
        load(data).then(([modul, fungsi]) => {
            setModul(modul);
            setFungsi(fungsi);
        }).catch((e) => {
            console.log(e);
            throw Error('');
        });
    }, [data])

    return <>
        {modul && fungsi &&
            <>
                <div>
                    modul: {modul.nama} /fungsi {fungsi.nama}
                </div>
                <div>

                </div>
            </>
        }
    </>
}