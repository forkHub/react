import React, { useContext, useEffect, useState } from "react";
import { Context, Dispatch } from "../../app/Provider";
import { TData } from "../../app/Store";
import { loadModulByIdIn } from "../../dao/ModulDao";
import { IModulEntity } from "../../entity/Module";
import { pilihModul } from "./ModuleReducer";

async function loadAnak(modul: IModulEntity, mainData: TData): Promise<[IModulEntity[]]> {
    let anak: IModulEntity[] = loadModulByIdIn(modul.anak);

    return [anak];
}

export function Item({ modul }: { modul: IModulEntity }) {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);

    const [anak, setAnak]: [IModulEntity[], any] = useState([]);

    useEffect(() => {
        loadAnak(modul, data).then(([anak]) => {
            setAnak(anak);
        }).catch((e) => {
            console.log(e);
        });
    }, [data])

    let itemAnak = anak.map((item: IModulEntity) => {
        return <Item key={item.id} modul={item}></Item>
    });

    const handleModuleDiKlik = (modul: IModulEntity) => {
        pilihModul(dispatch, modul);
    }

    return (
        <div>
            <div
                className={"disp-flex " + (data.idModulAktif == modul.id ? "border" : "")}>
                {modul.nama}
                <button
                    type="button"
                    onClick={() => { handleModuleDiKlik(modul) }}>
                    pilih
                </button>
            </div>
            <div className="pad-left-4">{itemAnak}</div>
        </div >
    )
}