import React from 'react';
import { useContext } from "react";
import * as AppModule from "../module/ModuleApp";
import { MainContext } from "./MainContext";
import { EHal, IMainData } from "./MainStore";
import { MainPovider } from "./MainProvider";
import { EditMain } from '../module_edit/EditApp';

function Content() {
    const data: IMainData = useContext(MainContext);

    if (data.hal === EHal.MODUL) {
        return <AppModule.ModuleApp />
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