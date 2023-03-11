import React, { useContext } from "react";
import { buat, getModulById } from "../../entity/Module";
import { MainContext, MainDispatch } from "../main/MainContext";
import { EMainAction } from "../main/MainReducer";
import { EHal, IMainData } from "../main/MainStore";
import { tambahModul } from "./ModuleReducer";

export function Menu() {
    let data = useContext(MainContext);

    return <>
        {data.hal == EHal.MODUL && <ModulPilih />}

        <button onClick={() => {
            console.log('klik load');
        }}> load </button>
    </>
}

function ModulPilih() {
    let data: IMainData = useContext(MainContext);
    let dispatch = useContext(MainDispatch);

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