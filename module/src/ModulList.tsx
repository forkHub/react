import { IModulDataProp, IModulEntity } from "./ModulEntity";
import React from "react";

export function RenderList({ data }: IModulDataProp) {
    let listEl = data.map((item: IModulEntity) => {
        console.log(item);
        return <div key={item.id}>{item.nama}</div>
    });

    return <>{listEl}</>
}