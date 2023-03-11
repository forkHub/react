import React, { useContext } from "react";
import { editModul as editModulDispatch } from "./ModuleReducer";
import { Context, Dispatch } from "../../app/Provider";
import { EHal } from "../../app/enum";
import { addModule, buatModule, hapusModul, simpanModul } from "../../dao/ModulDao";
import { IModulEntity } from "../../entity/Module";
import { mainPageUpdate } from "../main/MainPageReducer";

export function Menu({ parentModul }: { parentModul: IModulEntity }) {
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

async function tambahModul(modul: IModulEntity, induk: IModulEntity) {
    await (addModule(modul));
    induk.anak.push(modul.id);
    simpanModul();
}

function MenuModulAktif({ modul }: { modul: IModulEntity }) {
    let dispatch = useContext(Dispatch);

    return <>
        {modul && <>
            <button onClick={() => {
                tambahModul(buatModule('test'), modul)
                    .then(() => {
                        mainPageUpdate(dispatch);
                    })
                    .catch((e) => {
                        console.error(e);
                    });
            }}> Tambah </button>

            <button onClick={() => {
                editModulDispatch(dispatch);
            }}> edit </button>

            <button onClick={() => {
                hapusModul(modul)
                    .then(() => {

                    })
                    .catch((e) => {
                        console.error(e);
                        throw Error()
                    });
            }}> hapus </button>
        </>}
    </>
}