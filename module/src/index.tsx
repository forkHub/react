import { createRoot, Root } from 'react-dom/client';
import React, { useState } from 'react';
import { RenderList } from './ModulList';
import { IModulDataProp, IModulEntity } from './ModulEntity';

let cont: HTMLElement = document.createElement('div');
cont.setAttribute('id', 'react-root');
document.body.appendChild(cont);

const root: Root = createRoot(cont);
const data: IModulEntity[] = [
    {
        id: 1,
        nama: "nama1",
        anak: []
    },
    {
        id: 2,
        nama: "nama2",
        anak: [2, 3, 4]
    },

];
const data2: IModulEntity[] = [...data];
console.log(data2);

function App() {
    let [modul, setModul] = useState(data);

    return <>
        <RenderList data={modul} />
        <button onClick={() => {
            setModul([
                ...modul,
                {
                    id: Date.now(),
                    nama: 'random' + Date.now(),
                    anak: []
                }
            ])
        }}>Ok</button>
    </>
}

root.render(<>
    <App />
</>);

