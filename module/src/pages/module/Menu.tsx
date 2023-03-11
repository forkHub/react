import React, { useContext } from "react";
import { buat, getModulById } from "../../entity/Module";
import { Context, Dispatch } from "../../app/Context";
import { EHal, IData } from "../../app/Store";
import { tambahModul } from "./ModuleReducer";

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
            tambahModul(dispatch, buat('test'), getModulById(data.idModulDipilih, data));
        }}> Tambah </button>

        <button onClick={() => {
            //TODO: edit
        }}> edit </button>

        <button onClick={() => {
            //TODO: hapus
        }}> hapus </button>

    </>
}