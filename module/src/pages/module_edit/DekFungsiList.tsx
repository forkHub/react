import { TDekFungsi } from "../../entity/DekFungsi";
import React, { useContext, useEffect, useState } from 'react';
import { DekFungsi } from "./DekFungsi";
import { tambahFungsi } from "./ModulEditReducer";
import { Dispatch } from "../../app/Provider";
import { IAction } from "../../app/Reducer";

function handleTambahKlik(dispatch: React.Dispatch<IAction>) {
    tambahFungsi(dispatch)
}

export function DekFungList({ list }: { list: TDekFungsi[] }) {
    const dispatch = useContext(Dispatch);

    const items: JSX.Element[] = list.map((item) => {
        return <DekFungsi key={item.id} fungsi={item} />
    });

    return <>
        <div>Fungsi2:</div>
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
