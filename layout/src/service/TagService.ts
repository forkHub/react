import { ITag } from "../entities";
import { id } from "../util/Id";

let table: string = 'tagdb';

const def: ITag = {
    id: id(),
    nama: 'body',
    anak: []
};

class TagService {
    private body: ITag;

    private load(): ITag {
        try {
            this.body = JSON.parse(window.localStorage.getItem(table));
            return this.body;
        } catch (e) {
            console.groupCollapsed('error');
            console.warn(e);
            console.groupEnd();

            this.body = def;
            this.simpan();
            return this.body;
        }
    }

    private simpan(): void {
        let tagDb: string = JSON.stringify(this.body);
        window.localStorage.setItem('tagdb', tagDb);
    }

    private getByIdByTag(tag: ITag, id: number): ITag {
        let hasil: ITag;

        //cari di tag
        if (tag.id == id) return tag;

        //cari di anak
        for (let i: number = 0; i < tag.anak.length; i++) {
            let tagItem: ITag = tag.anak[i];

            hasil = this.getByIdByTag(tagItem, id);
            if (hasil) return hasil;
        }

        return hasil;
    }

    tambahAnak(tag: ITag, indukId: number): void {
        this.load();
        let indukTag: ITag = this.getByIdByTag(this.body, indukId);
        indukTag.anak.push(tag);
        this.simpan();
    }

    getBody(): ITag {
        this.load();
        return this.body;
    }

    getAnak(indukId: number): ITag[] {
        this.load();
        let induk: ITag = this.getByIdByTag(this.body, indukId);
        return induk.anak;
    }
}

export const tagService: TagService = new TagService();