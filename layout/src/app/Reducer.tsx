import { TData } from "./Store";
import { EAction } from "./enum";

export type TAction = {
    type: EAction,
    payload?: any;
}

function getTag(str: string): string {
    return str.slice(0, str.indexOf('/'));
}

export function Reducer(data: any, action: TAction): any {
    let tag: string = getTag(action.type);

    switch (tag) {
        // case "etc": {
        //     // console.log(tag);
        //     return tagReducer.reduce(data, action);
        //     break;
        // }
        case "callback": {
            let hasil: TData;

            console.group('Reducer execute callbacktag');
            hasil = action.payload();
            console.groupEnd();

            return hasil
            break;
        }
        default: {
            throw Error('tag is not defined ' + tag + '/type ' + action.type);
        }
    }
}
