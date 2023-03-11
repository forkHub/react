import React from 'react';
import { useContext } from "react";
import { Context } from "../../app/Context";
import { EHal, IData } from "../../app/Store";
import { EditMain } from '../module_edit/EditApp';
import { ModulePage } from '../module/ModulePage';

export function MainPage() {
    const data: IData = useContext(Context);

    if (data.hal === EHal.MODUL) {
        return <ModulePage />
    }
    else if (data.hal === EHal.MODUL_EDIT) {
        return <EditMain />
    }
    else {
        throw Error('');
    }
}