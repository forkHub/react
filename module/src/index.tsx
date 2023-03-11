import { createRoot, Root } from 'react-dom/client';
import React from 'react';
import { MainPage } from './pages/main/MainPage';
import "./css/css.css";
import { Provider } from './app/Provider';

let cont: HTMLElement = document.createElement('div');
cont.setAttribute('id', 'react-root');
document.body.appendChild(cont);

const root: Root = createRoot(cont);

root.render(<>
    <Provider>
        <MainPage />
    </Provider>
</>);
