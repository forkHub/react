import { createRoot, Root } from 'react-dom/client';
import React from 'react';
import { Daftar } from './settler/ui/Daftar';
import { Provider } from './settler/ui/Provider';

let cont: HTMLElement = document.createElement('div');
cont.setAttribute('id', 'react-root');
document.body.appendChild(cont);

const root: Root = createRoot(cont);

//get data

root.render(<>
    <React.StrictMode>
        <Provider>
            <Daftar />
        </Provider>
    </React.StrictMode>
</>);


// function filterName(name: string): string {
//     let reg: RegExp = /\w+_\w+/;
//     reg =
// }
