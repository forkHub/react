import React from 'react';
import { useContext } from "react";
import { Context } from "../../app/Context";
import { EHal, IData } from "../../app/Store";
import { EditMain } from '../module_edit/EditApp';
import { ModuleApp } from '../module/ModuleApp';

function Content() {
    const data: IData = useContext(Context);

    if (data.hal === EHal.MODUL) {
        return <ModuleApp />
    }
    else if (data.hal === EHal.MODUL_EDIT) {
        return <EditMain />
    }
    else {
        throw Error('');
    }
}

export function AppMain() {

    return <>
        <Content />
    </>
}