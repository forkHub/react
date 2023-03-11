import React, { useContext, useEffect, useState } from "react";
import { IMainData } from "../main/MainStore";
import { MainContext, MainDispatch } from "../main/MainContext";
import { getModulById, IModulEntity, loadByIdIn } from "../../entity/Module";
import { pilihModul } from "./ModuleReducer";

async function load(id: number, mainData: IMainData): Promise<[IModulEntity, IModulEntity[]]> {
    let modul: IModulEntity = getModulById(id, mainData);
    let anak: IModulEntity[] = loadByIdIn(modul.anak, mainData);

    return [modul, anak];
}

export function Item({ id }: any) {
    const mainData: IMainData = useContext(MainContext);
    const dispatcher = useContext(MainDispatch);

    const [modul, setModul]: [IModulEntity, any] = useState(null);
    const [anak, setAnak]: [IModulEntity[], any] = useState([]);

    useEffect(() => {
        load(id, mainData).then(([modul, anak]) => {
            setModul(modul);
            setAnak(anak);
        }).catch((e) => {
            console.log(e);
        });
    }, [mainData])

    let item2 = anak.map((item: IModulEntity) => {
        return <Item key={item.id} id={item.id}></Item>
    });

    const handleModuleDiKlik = (modul: IModulEntity) => {
        pilihModul(dispatcher, modul);
    }

    return (
        modul &&
        <div>
            <div className={"disp-flex " + (mainData.idModulDipilih == id ? "border" : "")}>
                {modul.nama}
                <button type="button" onClick={() => { handleModuleDiKlik(modul) }}>pilih</button>
            </div>
            <div className="pad-left-4">
                {item2}
            </div>
        </div >
    )
}