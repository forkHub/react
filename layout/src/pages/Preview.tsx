import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context, Dispatch } from '../app/Provider';
import { TData } from '../app/Store';
import { ITag } from '../entities';

function tag2Html(tag: ITag): string {
    let anak: string = '';
    tag.anak.forEach((tag2) => {
        anak += tag2Html(tag2);
    })

    return `<${tag.nama}>
        ${anak}
    </${tag.nama}>`;
}

function body2Html(body: ITag): string {
    return tag2Html(body);
}

export function Preview() {
    const data: TData = useContext(Context);
    // const dispatch = useContext(Dispatch);
    // const [html, setHtml]: [string, any] = useState('');
    let iframe = useRef(null);

    useEffect(() => {
        iframe.current.contentWindow.document.open();
        iframe.current.contentWindow.document.write(body2Html(data.body));
        iframe.current.contentWindow.document.close();
    }, [])


    return <>
        <iframe ref={iframe}>
        </iframe>
    </>
}