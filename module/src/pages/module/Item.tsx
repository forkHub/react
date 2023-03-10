import { IModuleData, IModulEntity, IModulprop } from "./ModuleInterface";
import React, { useContext, useEffect, useState } from "react";
import { ModuleContext, ModuleDispatch } from "./ModuleContex";
import { Action } from "./ModuleReducer";
import { getModulById, loadByIdIn } from "./ModuleStore";

export function Item({ id }: IModulprop) {
    const modulData: IModuleData = useContext(ModuleContext);
    const modulDispatch = useContext(ModuleDispatch);

    const [modul, setModul]: [IModulEntity, any] = useState(null);
    const [anak, setAnak]: [IModulEntity[], any] = useState([]);

    async function load(id: number): Promise<[IModulEntity, IModulEntity[]]> {
        let modul: IModulEntity = getModulById(id, modulData);
        let anak: IModulEntity[] = loadByIdIn(modul.anak, modulData);


        return [modul, anak];
    }

    useEffect(() => {
        load(id).then(([modul, anak]) => {
            setModul(modul);
            setAnak(anak);
        }).catch((e) => {
            console.log(e);
        });
    }, [modulData])

    let item2 = anak.map((item: IModulEntity) => {
        return <Item key={item.id} id={item.id}></Item>
    });

    const klik = (id: number) => {
        modulDispatch({
            type: Action.PILIH,
            diDipilih: id
        })
    }

    return (
        modul &&
        <div>
            <div className={"disp-flex " + (modulData.dipilih == id ? "border" : "")}>
                {modul.nama}
                <button type="button" onClick={() => { klik(modul.id) }}>pilih</button>
            </div>
            <div className="pad-left-4">
                {item2}
            </div>
        </div >
    )
}