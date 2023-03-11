import React, { useContext, useEffect, useState } from "react";
import { Context, Dispatch } from "../../app/Provider";
import { IData } from "../../app/Store";
import { IModulEntity, loadByIdIn } from "../../entity/Module";
import { pilihModul } from "./ModuleReducer";

async function loadAnak(modul: IModulEntity, mainData: IData): Promise<[IModulEntity[]]> {
    let anak: IModulEntity[] = loadByIdIn(modul.anak, mainData);

    return [anak];
}

export function Item({ modul }: { modul: IModulEntity }) {
    const data: IData = useContext(Context);
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
                className={"disp-flex " + (data.modulAktif.id == modul.id ? "border" : "")}>
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