
export type TStore = {
    id: number;
}

export function clone(store: any): TStore {
    return JSON.parse(JSON.stringify(store));
}

