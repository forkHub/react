import React, { useContext, useState, useEffect } from "react";
import { Context, Dispatcher } from "../../app/Provider";
import { TData } from "../../app/Store";
import { ITag } from "../../entities";
import { tagService } from "../../service/TagService";
import { MenuAtas, MenuStandard } from "../Menu";
import { EHal } from "../../app/enum";
import { EditTag } from "../classCrud/EditTag";

function TagInfo({ tag }: { tag: ITag }) {
    const dispatch = useContext(Dispatcher);

    function getNamaClass(): string {
        return `class="${tag.class}"`;
    }

    function getNamaTag(): string {
        return tag.nama;
    }

    function getTeks(): string {
        return "";
    }

    function tagKlik(tag: ITag) {
        dispatch((data2: TData): TData => {
            data2.idTagAktif = tag.id;
            return data2;
        })
    }

    return <div
        className="disp-flex tag deskripsi"
        onClick={() => { tagKlik(tag); }}>
        {"<"}{getNamaTag()} {getNamaClass()}{">"}{getTeks()}
    </div>

}

function TagAnak({ anak }: { anak: ITag[] }) {
    let itemAnak = anak.map((item: ITag) => {
        return <TagEl key={item.id} tag={item}></TagEl>
    });

    return <div className="pd-left-16 anak ">{itemAnak}</div>
}

function TagEl({ tag }: { tag: ITag }) {
    const data: TData = useContext(Context);
    const [anak, setAnak]: [ITag[], any] = useState([]);

    useEffect(() => {
        setAnak(tagService.getAnak(tag.id));
    }, []);

    if (tag.nama == "teks") {
        return <div className="tag-teks">{tag.teks}</div>
    }

    return <>
        <div className={"tag-item " + (data.idTagAktif == tag.id ? " dipilih " : "")}>
            <TagInfo tag={tag} />
            <TagAnak anak={anak} />
            <div>
                {`</${tag.nama}>`}
            </div>
        </div >
    </>
}

function MenuBawah() {
    const dispatch = useContext(Dispatcher);

    return <>
        <div>
            <button onClick={() => {
                // tagReducer.hapusTag(dispatch, data.idTagAktif);
                //TODO:
            }}>hapus</button>

            <button onClick={() => {
                dispatch((data: TData): TData => {
                    data.halAktif = EHal.EDIT_TAG_ATR;
                    return data;
                })
            }}>
                edit atribut
            </button>

            <MenuStandard />
        </div>
    </>
}

function TagBody() {
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
        {body && <TagEl tag={body} key={body.id} />}
    </>
}

function HalTag() {
    return <>
        <div className="hal-tag disp-flex flex-dir-col height-12">
            <MenuAtas />
            <div className="tag-list flex-grow-1 pd-8">
                <TagBody />
            </div>
            <MenuBawah />
        </div>
    </>
}

export function TagRouter({ hal }: { hal: EHal }) {

    //TODO: kondisi
    if (hal == EHal.TAG_TREE) {
        return <HalTag />
    }
    else if (hal == EHal.EDIT_TAG_ATR) {
        return <EditTag />
    }
    else {
        return <></>
        console.warn('hal tidak valid ' + hal);
    }

}
