import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../app/Provider';
import { TData } from '../../app/Store';
import { ITag } from '../../entities';
import { tagService } from '../../service/TagService';
import "../../css/preview.css";

function tag2Html(tag: ITag): string {
    let anak: string = '';

    tagService.getAnak(tag.id).forEach((tag2) => {
        anak += tag2Html(tag2);
    });

    if (tag.nama == 'teks') {
        return tag.teks;
    }
    else if (tag.nama == 'br') {
        return `<br/ ${attr(tag)}>`;
    }
    else if (tag.nama == 'img') {
        return `<img/> ${attr(tag)}`;
    }
    else if (tag.nama == 'hr') {
        return `<hr ${attr(tag)}/>`;
    }

    return `<${tag.nama} ${attr(tag)}>
        ${anak}
    </${tag.nama}>`;
}

//TODO: render attribute
function attr(tag: ITag): string {
    tag;
    return '';
}

function body2Html(body: ITag): string {
    let hasil: string = '';
    hasil = tag2Html(body);
    // console.debug(hasil);
    return hasil;
}

export function Preview() {
    const data: TData = useContext(Context);
    let iframe = useRef(null);

    useEffect(() => {
        iframe.current.contentWindow.document.open();
        iframe.current.contentWindow.document.write(body2Html(tagService.getBody()));
        iframe.current.contentWindow.document.close();
    }, [])


    return <>
        <iframe className="preview" ref={iframe}>
        </iframe>
    </>
}