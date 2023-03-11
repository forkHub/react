import React, { useContext, useEffect, useState } from 'react';
import { TDekFungsi } from "../../entity/DekFungsi";

export function DekFungsi({ fungsi }: { fungsi: TDekFungsi }) {
    return <>
        <div>
            nama {fungsi.nama} ()
        </div>
    </>
}