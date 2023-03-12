import { TDekFungsi } from "../../entity/DekFungsi";
import React, { useContext } from 'react';
import { DekFungsi } from "./DekFungsi";
import { dispatchFungsiDitambah } from "./ModulEditReducer";
import { Dispatch } from "../../app/Provider";
import { TAction } from "../../app/Reducer";
import { IModulEntity } from "../../entity/Module";

function handleTambahKlik(dispatch: React.Dispatch<TAction>, induk: IModulEntity) {
    //TODO: tambah fungsi

    dispatchFungsiDitambah(dispatch, induk)
}

export function DekFungList({ list, modul }: { list: TDekFungsi[], modul: IModulEntity }) {
    const dispatch = useContext(Dispatch);

    const items: JSX.Element[] = list.map((item) => {
        return <DekFungsi key={item.id} fungsi={item} />
    });

    return <>
        <div>Fungsi:</div>
        <div>
            {items}
        </div>
        <div>
            <button
                onClick={() => { handleTambahKlik(dispatch, modul) }}
            >tambah</button>
        </div>
    </>
}
