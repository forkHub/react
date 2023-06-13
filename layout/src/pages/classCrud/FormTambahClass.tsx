import React, { useContext, useEffect, useState } from 'react';
import { Context, Dispatcher } from '../../app/Provider';
import { ClassObj, classService } from '../../service/ClassService';
import { EHal } from '../../app/enum';

export function FormTambahClass() {
    const data = useContext(Context);
    const dispatcher = useContext(Dispatcher);
    const [teks, setTeks] = useState('');

    return <>
        <form onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();

            try {
                classService.tambah(new ClassObj(teks));

                // classService.
                dispatcher((data) => {
                    data.halAktif = EHal.CLASS_MANAGER;
                    return data;
                })
            }
            catch (e) {
                console.warn('');
            }

            return false;
        }}>
            <div>
                <label>nama:</label>
            </div>
            <div>
                <input type='text' onChange={(e) => {
                    setTeks(e.target.value);
                }} value={teks} />
            </div>
            <div>
                <input type='submit' />
                <input type='button' onClick={() => { }} />
            </div>
        </form>
    </>
}