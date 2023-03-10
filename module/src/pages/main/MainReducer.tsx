import { clone, EHal, IMainData } from "./MainStore";

export enum EMainAction {
    MODUL_DIEDIT = 'modul di edit'
}

export interface IMainAction {
    type: EMainAction
}

export function MainReducer(data: IMainData, action: IMainAction): IMainData {
    switch (action.type) {
        case EMainAction.MODUL_DIEDIT: {

            console.log('modul diedit');

            let data2 = clone(data);
            data2.hal = EHal.MODUL_EDIT;

            return data2;

            break;
        }
        default: {
            throw Error();
        }
    }
    return data;
}