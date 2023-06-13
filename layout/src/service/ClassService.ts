import { id } from "../util/Id";

class ClassService {
    // private readonly list: ClassList;
    private readonly namaTable: string = 'ha.layout.class';

    constructor() {
        // this.list = new ClassList();
    }

    getAll(): ClassObj[] {
        return this.load();
    }

    tambah(obj: ClassObj) {
        let list = this.getAll();
        list.push(obj);

        this.simpan(list);
    }

    simpan(list: ClassObj[]): void {
        let list2: IClass[] = list.map((item) => {
            return item.toObj();
        });

        window.localStorage.setItem(this.namaTable, JSON.stringify(list2));

    }

    load(): ClassObj[] {

        //read
        try {
            let str = window.localStorage.getItem(this.namaTable);
            if (!str) return [];
            if (str.length == 0) return [];

            let classObj: IClass[] = JSON.parse(str);
            let hasil: ClassObj[] = [];

            classObj.forEach((item) => {
                hasil.push(ClassObj.fromObj(item));
            })

            return hasil;
        }
        catch (e) {
            console.warn(e);
            return [];
        }


        return [];
        //TODO:
    }

}
export const classService: ClassService = new ClassService();

// class ClassList {
//     private list: ClassObj[] = [];

//     tambah(c: ClassObj): void {
//         this.list.push(c);
//     }

//     simpan(): void {

//     }
// }

interface IClass {
    id: number,
    nama: string,
    prop: any[];
}

export class ClassObj implements IClass {
    private _id: number = 0;
    private _nama: string = '';
    readonly prop: Prop[] = [];

    constructor(nama: string = '') {
        this.nama = nama;
        this._id = id();
    }

    private renderProp(): string {
        let hasil: string = '';

        this.prop.forEach((prop, idx) => {
            hasil += ` ${prop.key} : ${prop.value} `;
            if (idx < this.prop.length - 1) {
                hasil += ',';
            }
        });

        return hasil;
    }

    // toString(): string {
    //     return `
    //         ${this._nama} {
    //             ${this.renderProp()}
    //         }
    //     `;
    // }

    toObj(): IClass {
        return {
            id: this.id,
            nama: this.nama,
            prop: this.prop.map((item) => {
                return item.toObj();
            })
        }
    }

    static fromObj(p: IClass): ClassObj {
        let hasil: ClassObj = new ClassObj();
        hasil.nama = p.nama;
        hasil.id = p.id;
        return hasil;
    }

    tambahProp(p: Prop): void {
        this.prop.push(p);
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nama(): string {
        return this._nama;
    }
    public set nama(value: string) {
        this._nama = value;
    }
}

interface IProp {
    key: string,
    value: string
}

export class Prop implements IProp {
    private _key: string = '';
    private _value: string = "";

    toObj(): IProp {
        return {
            key: this._key,
            value: this._value
        }
    }

    public get key(): string {
        return this._key;
    }
    public set key(value: string) {
        this._key = value;
    }
    public get value(): string {
        return this._value;
    }
    public set value(value: string) {
        this._value = value;
    }

}