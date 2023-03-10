import React, { useContext } from "react";
import { MainDispatch } from "../main/MainContext";
import { EMainAction } from "../main/MainReducer";
import { ModuleContext, ModuleDispatch } from "./ModuleContex";
import { Action } from "./ModuleReducer";
import * as DataSource from './ModuleStore';

export function Menu() {
    let data = useContext(ModuleContext);

    return <>
        {data.state == DataSource.editState.modulPilih && <ModulPilih />}

        <button onClick={() => {
            console.log('klik load');
        }}> load </button>
    </>
}

function ModulPilih() {
    let modulDispatch = useContext(ModuleDispatch);
    let appDispatch = useContext(MainDispatch);

    return <>
        <button onClick={() => {
            modulDispatch({
                type: Action.TAMBAH,
                modul: DataSource.buat("test " + Date.now()),
                induk: 0
            })
        }}> Tambah </button>

        <button onClick={() => {
            appDispatch({
                type: EMainAction.MODUL_DIEDIT,

            });
        }}> edit </button>

        <button onClick={() => {
            console.log('klik');
        }}> hapus </button>

    </>
}