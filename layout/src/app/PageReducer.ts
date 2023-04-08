import React from "react";
import { TAction } from "./MainReducer";
import { TData, clone } from "./Store";
import { EAction, EHal } from "./enum";

class PageReducer {
    reduce(data: TData, action: TAction): TData {
        if (action.type == EAction.HAL_DIPILIH) {
            return this.halDipilih(data, action.payload.hal);
        }
        else {
            throw Error('');
        }
    }

    pilihHal(dispatch: React.Dispatch<TAction>, hal: EHal): void {
        dispatch({
            type: EAction.HAL_DIPILIH,
            payload: {
                hal: hal
            }
        })
    }

    private halDipilih(data: TData, hal: EHal): TData {
        let data2: TData = clone(data);

        data2.hal = hal;
        return data2;
    }

}

export const pageReducer: PageReducer = new PageReducer();