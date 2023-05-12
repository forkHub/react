import React, { useContext, useState, useEffect } from "react";
import { Context, Dispatcher } from "../../app/Provider";
import { TData, clone } from "../../app/Store";
import { ITag } from "../../entities";
import { tagService } from "../../service/TagService";
// import { tagReducer } from "../../app/TagReducer";
// import { EAction } from "../../app/enum";
import { MenuAtas } from "../Menu";

function Tag({ tag }: { tag: ITag }) {
    const data: TData = useContext(Context);
    // const dispatch = useContext(Dispatch);
    const dispatcher = useContext(Dispatcher);
    const [anak, setAnak]: [ITag[], any] = useState([]);

    function tagKlik(tag: ITag) {

        // tagReducer.pilihTag(dispatch, tag.id);
        dispatcher((data2: TData): TData => {
            data2.idTagAktif = tag.id;
            return data2;
        })
    }

    function getNamaTeks(): string {
        if (tag.teks && tag.teks != '') return 'teks: ' + tag.teks;
        return "<" + tag.nama + ">";
    }

    useEffect(() => {
        setAnak(tagService.getAnak(tag.id));
    }, []);

    let itemAnak = anak.map((item: ITag) => {
        return <Tag key={item.id} tag={item}></Tag>
    });

    return <>
        <div className={"tag-item " + (data.idTagAktif == tag.id ? " dipilih " : "")}>
            <div
                className={"disp-flex tag "}
                onClick={() => { tagKlik(tag); }}>
                {getNamaTeks()}
            </div>
            <div className="pd-left-16 anak ">{itemAnak}</div>
        </div >
    </>
}

function MenuBawah() {

    return <>
        <div>
            <button onClick={() => {
                // tagReducer.hapusTag(dispatch, data.idTagAktif);
                //TODO:
            }}>hapus</button>
        </div>
    </>
}

function TagTree() {
    const data: TData = useContext(Context);
    const [body, setBody]: [ITag, any] = useState(null);
    const dispatcher = useContext(Dispatcher);

    useEffect(() => {

        if (!body) {
            setBody(tagService.getBody());

            dispatcher((data2: TData) => {
                return data2;
            })
        }

        if (data.idTagAktif <= 0) {

            // tagReducer.pilihTag(dispatch, tagService.getBody().id);

            dispatcher((data2: TData): TData => {
                data2.idTagAktif = tagService.getBody().id;
                return data2;
            })
        }

    }, [])

    return <>
        {body && <Tag tag={body} key={body.id} />}
    </>
}

export function HalTag() {
    return <>
        <div className="hal-tag disp-flex flex-dir-col height-12">
            <MenuAtas />
            <div className="tag-list flex-grow-1 pd-8">
                <TagTree />
            </div>
            <MenuBawah />
        </div>
    </>
}
