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

async function load(idModul: number): Promise<[TDekFungsi[], IModulEntity]> {
    let modul: IModulEntity = await loadModule(idModul);
    return [await loadFungsi(modul.fungsi), await loadModule(idModul)];
}

async function loadFungsi(id: number[]): Promise<TDekFungsi[]> {
    return loadFungsiByIdIn(id);
}

async function loadModule(id: number): Promise<IModulEntity> {
    return await getModulById(id);
}

export function ModulEditPage() {
    const data = useContext(Context);
    const dispatch = useContext(Dispatch);
    const [fungsi, setFungsi]: [TDekFungsi[], any] = useState(null);
    const [modul, setModul]: [IModulEntity, any] = useState(null);

    useEffect(() => {
        load(data.idModulAktif).then(([fungsi, modul]: [TDekFungsi[], IModulEntity]) => {
            setFungsi(fungsi);
            setModul(modul);
        }).catch((e) => {
            console.log(e);
            throw Error(e);
        });
    }, [data])

    return <>
        {
            modul && fungsi && <>
                <div>modul: {modul.nama} [ {modul.id} ]</div>
                <div>
                    <Varlist list={EHal.MODUL_EDIT} />
                </div>
                <hr />
                <div>
                    <DekFungList list={fungsi} modul={modul} />
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
    </>
}