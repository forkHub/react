import React, { useContext, useEffect, useState } from "react"
import { IGedung } from "../interface";
import { data } from "../Data";
import "../../gbr/sumur.png";
import { Context, Dispatcher } from "./Provider";
import { TStore } from "./Store";

export function Daftar() {
    const [gedung, setGedung]: [IGedung[], any] = useState([]);
    const disptacher = useContext(Dispatcher);
    const store = useContext(Context);

    useEffect(() => {
        let cancel: boolean = false;

        setGedung(data.gedungAr);

        setTimeout(() => {
            if (cancel) {
                return;
            }

            //jalan
            data.update();
            disptacher((store): TStore => {
                store.id = Math.floor(Math.random() * 9999);
                return store;
            })

        }, 100);

        return () => {
            cancel = true;
        }
    }, [store]);

    const gedungList = gedung.map(item => (
        <li key={item.id}>
            {item.type}<br />
            Produksi:<br />
            <progress value={item.produksi.posisi} max={item.produksi.posisiMaks}></progress>
        </li>
    ));

    return <div className="daftar-gedung">
        <p>Gudang</p>
        <ul>
            <li>air: {data.air.jumlah}</li>
            <li>pinus: {data.pinus.jumlah}</li>
        </ul>
        <p>Daftar Gedung</p>
        <ul>
            {gedungList}
        </ul>
    </div>
}