import React, { useContext } from "react";
import { Context } from "../../app/Provider";
import { TData } from "../../app/Store";
import { tagService } from "../../service/TagService";
import { ITag } from "../../entities";

export function Prop() {
    const data: TData = useContext(Context);

    function tag(): ITag {
        let tag: ITag = tagService.getById(data.idTagAktif);
        return tag;
    }

    return <>
        <div>
            <h3>tag:</h3>
            <div>{tag().nama}</div>
            <h3>id:</h3>
            <div>{tag().nama}</div>
        </div>
    </>
}