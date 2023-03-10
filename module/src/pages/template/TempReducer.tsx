import { clone, EHal, ITempData } from "./TempStore";

export enum ETempAction {
    MODUL_DIEDIT = 'modul di edit'
}

export interface ITempAction {
    type: ETempAction
}

export function TempReducer(data: ITempData, action: ITempAction): ITempData {
    switch (action.type) {
        case ETempAction.MODUL_DIEDIT: {

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