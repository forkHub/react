import React, { useContext, useEffect, useState } from 'react';
import { EHal } from '../../app/enum';
import { Context, Dispatch } from '../../app/Provider';
import { Varlist } from '../../comp/VarList';
import { loadFungsiByIdIn } from '../../dao/FungsiDao';
import { getModulById } from '../../dao/ModulDao';
import { TDekFungsi } from '../../entity/DekFungsi';
import { IModulEntity } from '../../entity/Module';
import { DekFungList } from './DekFungsiList';
import { editModulSelesai } from './ModulEditReducer';

async function loadFungsi(id: number[]): Promise<TDekFungsi[]> {
    return loadFungsiByIdIn(id);
}

export function ModulEditPage() {
    const data = useContext(Context);
    const dispatch = useContext(Dispatch);
    const [fungsi, setFungsi]: [TDekFungsi[], any] = useState([]);

    const modul: IModulEntity = getModulById(data.idModulAktif);

    useEffect(() => {
        loadFungsi(modul.fungsi).then((item: TDekFungsi[]) => {
            setFungsi(item);
        }).catch((e) => {
            console.log(e);
            throw Error(e);
        });
    }, [data])

    return <>
        <div>modul: {modul.nama} [ {modul.id} ]</div>
        <div>
            <Varlist list={EHal.MODUL_EDIT} />
        </div>
        <hr />
        <div>
            <DekFungList list={fungsi} />
        </div>
        <hr />
        <div>
            <button
                onClick={() => {
                    editModulSelesai(dispatch);
                }}
            >OK23</button>
        </div>
    </>
}