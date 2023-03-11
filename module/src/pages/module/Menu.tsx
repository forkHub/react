import React, { useContext } from "react";
import { TData } from "../../app/Store";
import { editModul, tambahModul } from "./ModuleReducer";
import { Context, Dispatch } from "../../app/Provider";
import { EHal } from "../../app/enum";
import { buatModule, getModulById } from "../../dao/ModulDao";

export function Menu() {
    let data = useContext(Context);

    return <>
        {data.hal == EHal.MODUL && <ModulPilih />}

        <button onClick={() => {
            console.log('klik load');
        }}> load </button>

        <button onClick={() => {

        }}> sample </button>

    </>
}

function ModulPilih() {
    let data: TData = useContext(Context);
    let dispatch = useContext(Dispatch);

    return <>
        <button onClick={() => {
            tambahModul(dispatch, buatModule('test'), getModulById(getModulById(data.idModulDipilih).id));
        }}> Tambah </button>

        <button onClick={() => {
            editModul(dispatch);
        }}> edit </button>

        <button onClick={() => {
            //TODO: hapus
        }}> hapus </button>

    </>
}