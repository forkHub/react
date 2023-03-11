import React, { useContext } from 'react';
import { Context, Dispatch } from '../../app/Provider';

export function EditFungsiPage() {
    const data = useContext(Context);
    const dispatch = useContext(Dispatch);

    return <>
        <div>
            {data.modulAktif.nama} / {data.fungsi.nama}
        </div>
        <div>

        </div>
    </>
}