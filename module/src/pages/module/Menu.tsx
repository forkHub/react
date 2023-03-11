import React, { useContext } from "react";
import { buat, getModulById } from "../../entity/Module";
import { EHal, IData } from "../../app/Store";
import { editModul, tambahModul } from "./ModuleReducer";
import { Context, Dispatch } from "../../app/Provider";

export function Menu() {
    let data = useContext(Context);

    return <>
        {data.hal == EHal.MODUL && <ModulPilih />}

        <button onClick={() => {
            console.log('klik load');
        }}> load </button>
    </>
}

function ModulPilih() {
    let data: IData = useContext(Context);
    let dispatch = useContext(Dispatch);

    return <>
        <button onClick={() => {
            tambahModul(dispatch, buat('test'), data.modulAktif);
        }}> Tambah </button>

        <button onClick={() => {
            editModul(dispatch);
        }}> edit </button>

        <button onClick={() => {
            //TODO: hapus
        }}> hapus </button>

    </>
}