import { TDekFungsi } from "../../entity/DekFungsi";
import React, { useContext } from 'react';
import { DekFungsi } from "./DekFungsi";
import { tambahFungsi } from "./ModulEditReducer";
import { Dispatch } from "../../app/Provider";
import { TAction } from "../../app/Reducer";

function handleTambahKlik(dispatch: React.Dispatch<TAction>) {
    tambahFungsi(dispatch)
}

export function DekFungList({ list }: { list: TDekFungsi[] }) {
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
                onClick={() => { handleTambahKlik(dispatch) }}
            >tambah</button>
        </div>
    </>
}
