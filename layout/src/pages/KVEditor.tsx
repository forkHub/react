import { id } from "../util/Id";

export type Tkv = {
    id: number,
    key: string,
    value: string
}

export function KVEditor({ data }: { data: Tkv[] }) {
    
    let daftar = data.map((item) => <li key={item.id}>
        {item.key}:{item.value}
    </li>)

    return <>
        <div className="key-value-editor">
            <div className="daftar">
                <ul>
                    {daftar}
                </ul>
            </div>
            <div className="tombol">
                <button>tambah</button>
                <button>edit</button>
                <button>hapus</button>
            </div>
        </div>
    </>
}