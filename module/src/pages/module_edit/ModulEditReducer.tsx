import { EAction, IAction } from "../../app/Reducer";
import { IData, clone, EHal } from "../../app/Store";

export function editModulSelesai(dispatch: React.Dispatch<IAction>) {
    console.log('edit module selesai:');

    dispatch({
        type: EAction.MODUL_EDIT_SELESAI
    });
}

export function handleModuleSelesai(data: IData): IData {

    let data2 = clone(data);
    data2.hal = EHal.MODUL;

    return data2;
}
