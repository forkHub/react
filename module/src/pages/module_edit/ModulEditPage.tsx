import React, { useContext, useEffect, useState } from 'react';
import { Context, Dispatch } from '../../app/Provider';
import { loadByIdIn, TDekFungsi } from '../../entity/DekFungsi';
import { DekFungList } from './DekFungsiList';
import { editModulSelesai } from './ModulEditReducer';

function VarList() {
    return <>
        <div>Variable:</div>
        <div>

        </div>
    </>
}

async function loadFungsi(id: number[], data: TDekFungsi[]): Promise<TDekFungsi[]> {
    return loadByIdIn(id, data);
}

export function ModulEditPage() {
    const data = useContext(Context);
    const dispatch = useContext(Dispatch);
    const [fungsi, setFungsi]: [TDekFungsi[], any] = useState([]);

    useEffect(() => {
        loadFungsi(data.modulAktif.fungsi, data.dekFungsiAr).then((item: TDekFungsi[]) => {
            setFungsi(item);
        }).catch((e) => {
            console.log(e);
            throw Error(e);
        });
    }, [data])

    return <>
        <div>modul: {data.modulAktif.nama} [ {data.modulAktif.id} ]</div>
        <div>
            <VarList />
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