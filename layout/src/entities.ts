
export interface ITag {
    id: number,
    nama: string,
    class: string,
    anak: ITag[],
    teks: string,
    idAttr: string,
    attr: Ikv[],
    classAttr: string[],
    styleAttr: string[]

}

export interface Ikv {
    id: number,
    key: string,
    value: string
}

class TagUtil {
    convert(): string {
        return ''; //TODO:
    }
}
export const tagUtil: TagUtil = new TagUtil();