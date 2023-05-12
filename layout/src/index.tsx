import { createRoot, Root } from 'react-dom/client';
import React from 'react';
import "./css/css.css";
import "./css/layout.css";
import { Provider } from './app/Provider';
import { HalDepan } from './pages/Hal';

let cont: HTMLElement = document.createElement('div');
cont.setAttribute('id', 'react-root');
document.body.appendChild(cont);

const root: Root = createRoot(cont);

//get data

root.render(<>
    <React.StrictMode>
        <Provider>
            <HalDepan />
        </Provider>
    </React.StrictMode>
</>);


// function filterName(name: string): string {
//     let reg: RegExp = /\w+_\w+/;
//     reg =
// }
