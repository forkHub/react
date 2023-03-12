"use strict";
function buatEntry(nama) {
    return {
        id: idx++,
        aktif: false,
        nama: nama,
    };
}
function Tombol({ item }) {
    function handleKlik(item) {
        console.log('klik');
        console.log(item);
    }
    return React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: () => { handleKlik(item); } },
            " ",
            item.nama));
}
function List({ daftar, geser }) {
    const ref = React.useRef(null);
    let daftarEl = daftar.map((item) => {
        return React.createElement(Tombol, { item: item });
    });
    React.useEffect(() => {
        console.log(geser);
        console.log(ref);
        ref.current.scrollBy({ left: geser });
    });
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "wspace-nowrap", ref: ref }, daftarEl));
}
function Comp() {
    const [geser, setGeser] = React.useState(0);
    const ref = React.useRef(null);
    function handleKiriKlik() {
        setGeser(geser - 10);
    }
    function handleKananKlik() {
        setGeser(geser + 10);
    }
    React.useEffect(() => {
        console.log(geser);
        console.log(ref);
        ref.current.scrollBy({ left: geser });
    });
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "disp-flex" },
            React.createElement("div", { className: "flex-grow-1 overflow-x-auto", ref: ref },
                React.createElement(List, { daftar: daftar, geser: geser })),
            React.createElement("div", { className: "disp-flex" },
                React.createElement("button", { onClick: () => { handleKiriKlik(); } }, "prev"),
                React.createElement("button", { onClick: () => { handleKananKlik(); } }, "next"))));
}
let idx = 0;
const daftar = [
    buatEntry("entry 1"),
    buatEntry("entry 2"),
    buatEntry("entry 3"),
    buatEntry("entry 4"),
    buatEntry("entry 5"),
    buatEntry("entry 6"),
    buatEntry("entry 7"),
];
ReactDOM.render(React.createElement(Comp, null), document.getElementById('react-root'));
/**
 * pakai posisi relative dan absolute
 */ 
