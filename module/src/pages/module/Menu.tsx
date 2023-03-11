import React, { useContext } from "react";
import { editModul, tambahModul } from "./ModuleReducer";
import { Context, Dispatch } from "../../app/Provider";
import { EHal } from "../../app/enum";
import { buatModule, getModulById } from "../../dao/ModulDao";
import { IModulEntity } from "../../entity/Module";

export function Menu({ parentModul }: { parentModul: IModulEntity }) {
    let data = useContext(Context);

    return <>
        {data.hal == EHal.MODUL && <ModulPilih modul={parentModul} />}

        <button onClick={() => {
            console.log('klik load');
        }}> load </button>

        <button onClick={() => {

        }}> sample </button>

    </>
}

function ModulPilih({ modul }: { modul: IModulEntity }) {
    let dispatch = useContext(Dispatch);

    return <>
        <button onClick={() => {
            tambahModul(dispatch, buatModule('test'), modul);
        }}> Tambah </button>

        <button onClick={() => {
            editModul(dispatch);
        }}> edit </button>

        <button onClick={() => {
            //TODO: hapus
        }}> hapus </button>

    </>
}