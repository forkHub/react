import React, { useContext, useEffect, useState } from 'react';
import { EHal } from '../../app/enum';
import { Context, Dispatch } from '../../app/Provider';
import { Varlist } from '../../comp/VarList';
import { getModulById } from '../../dao/ModulDao';
import { loadByIdIn, TDekFungsi } from '../../entity/DekFungsi';
import { IModulEntity } from '../../entity/Module';
import { DekFungList } from './DekFungsiList';
import { editModulSelesai } from './ModulEditReducer';

async function loadFungsi(id: number[], data: TDekFungsi[]): Promise<TDekFungsi[]> {
    return loadByIdIn(id, data);
}

export function ModulEditPage() {
    const data = useContext(Context);
    const dispatch = useContext(Dispatch);
    const [fungsi, setFungsi]: [TDekFungsi[], any] = useState([]);

    const modul: IModulEntity = getModulById(data.idModulDipilih);

    useEffect(() => {
        loadFungsi(modul.fungsi, data.dekFungsiAr).then((item: TDekFungsi[]) => {
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