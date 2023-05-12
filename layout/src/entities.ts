
export interface ITag {
    id: number,
    nama: string,
    anak: ITag[],
    teks: string,
    idAttr: string,
    classAttr: string[],
    styleAttr: string[]

}

class TagUtil {
    convert(): string {
        return ''; //TODO:
    }
}
export const tagUtil: TagUtil = new TagUtil();