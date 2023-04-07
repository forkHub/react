import React, { useContext, useEffect, useState } from 'react';
import { reducer2 } from '../app/Reducer2';
import { Context, Dispatch } from '../app/Provider';
import { TData } from '../app/Store';
import { id } from '../util/Id';

export function HalElemen() {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);

    function buatTag(nama: string) {
        return <>
            <div className='tag-pilih' onClick={() => {
                reducer2.tambahAnak(dispatch, {
                    anak: [],
                    id: id(),
                    nama: nama
                }, data.idTagAktif)
            }}>nama</div >
        </>
    }

    return <>
        {buatTag('div')}
        {buatTag('button')}
        {buatTag('ul')}
        {buatTag('li')}
    </>
}