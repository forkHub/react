import React from 'react';
import { TempProvider as EditProvider } from './TempProvider';

function Content() {

    return <>
        <button>OK</button>
    </>
}

export function EditMain() {

    return <>
        <EditProvider>
            <Content />
        </EditProvider>
    </>
}