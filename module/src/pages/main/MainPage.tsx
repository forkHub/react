import React from 'react';
import { useContext } from "react";
import { TData, simpan } from "../../app/Store";
import { ModulePage } from '../module/ModulePage';
import { Context } from '../../app/Provider';
import { ModulEditPage } from '../module_edit/ModulEditPage';
import { SamplePAge } from '../sample/SamplePage';
import { EHal } from '../../app/enum';

export function MainPage() {
    const data: TData = useContext(Context);
    simpan(data);

    if (data.hal === EHal.MODUL) {
        return <ModulePage />
    }
    else if (data.hal === EHal.MODUL_EDIT) {
        return <ModulEditPage />
    }
    else if (data.hal === EHal.SAMPLE) {
        return <SamplePAge />
    }
    else {
        throw Error('');
    }
}