import React from 'react';
import { useContext } from "react";
import { MainContext } from "./MainContext";
import { EHal, IMainData } from "./MainStore";
import { MainPovider } from "./MainProvider";
import { EditMain } from '../module_edit/EditApp';
import { ModuleApp } from '../module/ModuleApp';

function Content() {
    const data: IMainData = useContext(MainContext);


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
        <MainPovider>
            <Content />
        </MainPovider>
    </>
}