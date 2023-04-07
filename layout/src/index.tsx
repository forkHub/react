import { createRoot, Root } from 'react-dom/client';
import React from 'react';
import "./css/css.css";
import { Provider } from './app/Provider';
import { HalDepan } from './pages/HalDepan';

let cont: HTMLElement = document.createElement('div');
cont.setAttribute('id', 'react-root');
document.body.appendChild(cont);

const root: Root = createRoot(cont);

root.render(<>
    <Provider>
        <HalDepan />
    </Provider>
</>);
