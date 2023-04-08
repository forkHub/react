import React, { useContext, useEffect, useState } from 'react';
import { pageReducer } from '../app/PageReducer';
import { Context, Dispatch } from '../app/Provider';
import { TData } from '../app/Store';
import { id } from '../util/Id';
import { HalDepan } from './HalDepan';
import { EHal } from '../app/enum';
import { tagReducer } from '../app/TagReducer';

export function PilihElement() {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);

    function buatTag(nama: string) {
        return <>
            <button className='tag-pilih' onClick={() => {

                tagReducer.tambahAnak(dispatch, {
                    anak: [],
                    id: id(),
                    nama: nama
                }, data.idTagAktif);

                pageReducer.pilihHal(dispatch, EHal.TAG_TREE);
            }}>{nama}</button ><br />
        </>
    }

    return <>
        {buatTag('div')}
        {buatTag('button')}
        {buatTag('ul')}
        {buatTag('li')}
    </>
}