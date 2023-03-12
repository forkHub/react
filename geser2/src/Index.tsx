interface IEntry {
    id: number,
    nama: string,
    aktif: boolean,
}

function buatEntry(nama: string): IEntry {
    return {
        id: idx++,
        aktif: false,
        nama: nama,
    }
}

function Tombol({ item }: { item: IEntry }) {

    function handleKlik(item: IEntry) {
        console.log('klik');
        console.log(item);
    }

    return <>
        <button
            onClick={() => { handleKlik(item) }}> {item.nama}
        </button>
    </>
}

function List({ daftar, geser }: { daftar: IEntry[], geser: number }) {
    const ref = React.useRef(null);

    let daftarEl = daftar.map((item: IEntry) => {
        return <Tombol item={item} />
    });

    React.useEffect(() => {
        console.log(geser);
        console.log(ref);
        (ref.current as unknown as HTMLElement).scrollBy({ left: geser });
    })

    return <>
        <div className="wspace-nowrap" ref={ref}>
            {daftarEl}
        </div>
    </>
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
        (ref.current as unknown as HTMLElement).scrollBy({ left: geser });
    })

    return <>
        <div className="disp-flex">
            <div className="flex-grow-1 overflow-x-auto" ref={ref}>
                <List daftar={daftar} geser={geser} />
            </div>
            <div className="disp-flex">
                <button
                    onClick={() => { handleKiriKlik() }}
                >prev</button>
                <button
                    onClick={() => { handleKananKlik() }}
                >next</button>
            </div>
        </div>
    </>
}

let idx: number = 0;
const daftar: IEntry[] = [
    buatEntry("entry 1"),
    buatEntry("entry 2"),
    buatEntry("entry 3"),
    buatEntry("entry 4"),
    buatEntry("entry 5"),
    buatEntry("entry 6"),
    buatEntry("entry 7"),
]

ReactDOM.render(<Comp />, document.getElementById('react-root'));

/**
 * pakai posisi relative dan absolute
 */