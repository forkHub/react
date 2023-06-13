import { TStore } from "./Store";

export type TAction = {
    type: "callback/callback",
    payload?: any;
}

function getTag(str: string): string {
    return str.slice(0, str.indexOf('/'));
}

export function Reducer(data: any, action: TAction): any {
    let tag: string = getTag(action.type);

    switch (tag) {
        case "callback": {
            let hasil: TStore;
            hasil = action.payload();
            return hasil
            break;
        }
        default: {
            throw Error('tag is not defined ' + tag + '/type ' + action.type);
        }
    }
}
