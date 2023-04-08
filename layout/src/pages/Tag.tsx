import React, { useContext, useState, useEffect } from "react";
import { Context, Dispatch } from "../app/Provider";
import { TData } from "../app/Store";
import { ITag } from "../entities";
import { tagService } from "../service/TagService";
import { tagReducer } from "../app/TagReducer";

function Tag({ tag }: { tag: ITag }) {
    const data: TData = useContext(Context);
    const dispatch = useContext(Dispatch);
    const [anak, setAnak]: [ITag[], any] = useState([]);

    function tagKlik(tag: ITag) {
        tagReducer.pilihTag(dispatch, tag.id);
    }

    useEffect(() => {
        setAnak(tagService.getAnak(tag.id));
    }, []);

    let itemAnak = anak.map((item: ITag) => {
        return <Tag key={item.id} tag={item}></Tag>
    });

    return <>
        <div>
            <div
                className={"disp-flex tag " + (data.idTagAktif == tag.id ? "border" : "")}
                onClick={() => {
                    tagKlik(tag);
                }}>
                {tag.nama}
            </div>
            <div className="pad-left-4">{itemAnak}</div>
        </div >
    </>
}

export function TagTree() {
    const data: TData = useContext(Context);
    const [tag, setTag]: [ITag, any] = useState(null);
    const dispatch = useContext(Dispatch);

    useEffect(() => {
        setTag(data.body);
        if (data.idTagAktif <= 0) {
            tagReducer.pilihTag(dispatch, data.body.id);
        }
    }, [])

    return <>
        {tag && <Tag tag={tag} key={tag.id} />}
    </>
}
