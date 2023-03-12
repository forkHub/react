import React, { useContext } from "react";
import { editModul as editModulDispatch } from "./ModuleReducer";
import { Context, Dispatch } from "../../app/Provider";
import { EHal } from "../../app/enum";
import * as moduleEnt from "../../entity/Module";
import { dispatchModulDiUpdate } from "../../entity/EntityReducer";
import { TAction } from "../../app/Reducer";

export function Menu({ parentModul }: { parentModul: moduleEnt.IModulEntity }) {
    let data = useContext(Context);

    return <>
        {data.hal == EHal.MODUL && <MenuModulAktif modul={parentModul} />}

        <button onClick={() => {
            console.log('klik load');
        }}> load </button>

        <button onClick={() => {

        }}> sample </button>

    </>
}

async function handleTambahModulKlik(induk: moduleEnt.IModulEntity, dispatch: React.Dispatch<TAction>) {
    let nama: string = "test";

    let modulBaru: moduleEnt.IModulEntity = moduleEnt.buatModule(nama, induk.id);
    induk.anak.push(modulBaru.id);

    await moduleEnt.simpan(modulBaru);
    await moduleEnt.simpan(induk);
    dispatchModulDiUpdate(dispatch);
}

async function handleModulDihapusKlik(modul: moduleEnt.IModulEntity, dispatch: React.Dispatch<TAction>): Promise<void> {
    let ok: boolean = window.confirm('hapus modul ' + modul.nama);

    if (ok) {
        await moduleEnt.hapus(modul);
        dispatchModulDiUpdate(dispatch);
        //TODO: get parent
    }
}

function MenuModulAktif({ modul }: { modul: moduleEnt.IModulEntity }) {
    let dispatch = useContext(Dispatch);

    return <>
        {modul && <>
            <button onClick={() => {
                handleTambahModulKlik(modul, dispatch)
                    .catch((e) => {
                        console.error(e);
                    });
            }}> Tambah </button>

            <button onClick={() => {
                editModulDispatch(dispatch);
            }}> edit </button>

            <button onClick={() => {
                handleModulDihapusKlik(modul, dispatch)
                    .catch((e) => {
                        console.error(e);
                        throw Error()
                    });
            }}> hapus </button>

            <button onClick={() => {
                dispatchModulDiUpdate(dispatch);
            }}> update Entity </button>

        </>}
    </>
}