import React, { useContext } from 'react';
import { Context, Dispatch } from '../../app/Provider';

export function SamplePAge() {
    const data = useContext(Context);
    const dispatch = useContext(Dispatch);

    return <>
        Hello Sample Page
    </>
}