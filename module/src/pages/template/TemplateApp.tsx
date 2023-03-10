import React from 'react';
import { useContext } from "react";
import * as AppModule from "../module/ModuleApp";
import { TempContext } from "./TempContext";
import { EHal, ITempData } from "./TempStore";
import { TempProvider } from './TempProvider';

function Content() {
    const data: ITempData = useContext(TempContext);

    if (data.hal === EHal.MODUL) {
        return <AppModule.ModuleApp />
    }
    else if (data.hal === EHal.MODUL_EDIT) {
        return <></>
    }
    else {
        throw Error('');
    }
}

export function AppMain() {

    return <>
        <TempProvider>
            <Content />
        </TempProvider>
    </>
}