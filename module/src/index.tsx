import { createRoot, Root } from 'react-dom/client';
import React from 'react';
import { AppMain } from './pages/main/MainApp';
import "./css/css.css";

let cont: HTMLElement = document.createElement('div');
cont.setAttribute('id', 'react-root');
document.body.appendChild(cont);

const root: Root = createRoot(cont);

root.render(<>
    <AppMain />
</>);
