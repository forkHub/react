import React, { useContext } from "react";
import { editModul, tambahModul as tambahModulDispatch } from "./ModuleReducer";
import { Context, Dispatch } from "../../app/Provider";
import { EHal } from "../../app/enum";
import { addModule, buatModule, simpanModul } from "../../dao/ModulDao";
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

async function tambahModul(modul: IModulEntity, induk: IModulEntity) {
    await (addModule(modul));
    induk.anak.push(modul.id);
    simpanModul();
}

function ModulPilih({ modul }: { modul: IModulEntity }) {
    let dispatch = useContext(Dispatch);

    return <>
        <button onClick={() => {
            tambahModul(buatModule('test'), modul)
                .then(() => {
                    tambahModulDispatch(dispatch);
                })
                .catch((e) => {
                    console.error(e);
                });
        }}> Tambah </button>

        <button onClick={() => {
            editModul(dispatch);
        }}> edit </button>

        <button onClick={() => {
            //TODO: hapus
        }}> hapus </button>

    </>
}