import { ITag } from "../pages/HalDepan";
import { id } from "../util/Id";

const body: ITag = {
    id: id(),
    nama: 'body',
    anak: []
};

class TagService {
    getBody(): ITag {
        return body;
    }

    getById(tag: ITag, id: number): ITag {
        let hasil: ITag;

        //cari di tag
        if (tag.id == id) return tag;

        //cari di anak
        for (let i: number = 0; i < tag.anak.length; i++) {
            let tagItem: ITag = tag.anak[i];

            hasil = this.getById(tagItem, id);
            if (hasil) return hasil;
        }

        return hasil;
    }

    getAnakById(induk: ITag, id: number) {
        return induk.anak.find((item) => {
            return item.id == id
        })
    }

    tambah(tag: ITag, indukId: number): void {
        let indukTag: ITag = this.getById(body, indukId);
        indukTag.anak.push(tag);
    }
}

export const tagService: TagService = new TagService();