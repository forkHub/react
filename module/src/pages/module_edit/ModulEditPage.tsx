import React, { useContext } from 'react';
import { Context, Dispatch } from '../../app/Provider';
import { editModulSelesai } from './ModulEditReducer';

export function ModulEditPage() {
    console.log('edit module page');

    const data = useContext(Context);
    const dispatch = useContext(Dispatch);

    return <>
        <div>modul: {data.idModulDipilih}</div>
        <button
            onClick={() => {
                editModulSelesai(dispatch);
            }}
        >OK2</button>
    </>
}