import { EAction } from "./enum";
import { pageReducer } from "./PageReducer";
import { TData } from "./Store";
import { tagReducer } from "./TagReducer";

export type TAction = {
    type: EAction,
    payload?: any;
}

function getTag(str: string): string {
    return str.slice(0, str.indexOf('/'));
}

export function Reducer(data: TData, action: TAction): TData {
    let tag: string = getTag(action.type);

    switch (tag) {
        case "etc": {
            // console.log(tag);
            return tagReducer.reduce(data, action);
            break;
        }
        case "hal": {
            return pageReducer.reduce(data, action);
            break;
        }
        default: {
            throw Error('tag is not defined ' + tag + '/type ' + action.type);
        }
    }
}
