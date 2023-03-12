export enum EHal {
    MODUL = 'modul',
    MODUL_EDIT = 'modul_edit',
    FUNGSI_EDIT = 'edit_fungsi',
    SAMPLE = 'sample',
    MAIN = 'main',
}

export enum EEntity {
    MODUL_ENT = 'modul_ent',
    FUNGSI_ENT = 'fungsi_ent'
}

export enum EAction {
    MAIN_DIUPDATE = 'main/diupdate',

    MODUL_ENT_DIPILIH = 'modul_ent/dipilih',
    MODUL_ENT_DIHAPUS = 'modul_ent/dihapus',
    MODUL_ENT_DITAMBAH = 'modul_ent/ditambah',
    MODUL_ENT_DIUPDATE = 'modul_ent/diupdate',

    FUNGSI_ENT_DIPILIH = 'fungsi_ent/dipilih',

    MODUL_MODUL_EDIT = 'modul/modul/diedit',
    MODUL_MODUL_PILIH = 'modul/modul/dipilih',
    MODUL_SAMPLE_DIKLIK = 'modul/sample_tbl/klik',

    MODUL_EDIT_SELESAI = 'modul_edit/selesai',
    MODUL_EDIT_TAMBAH_FUNGSI = 'modul_edit/fungsi_ditambah',
    MODUL_EDIT_RENAME_FUNGSI = 'modul_edit/fungsi_direname',

    EDIT_FUNGSI_SELESAI = 'edit_fungsi/tombol_selesai_diklik',
    EDIT_FUNGSI_TAMBAH_VAR = 'edit_fungsi/var_ditambah',
    EDIT_FUNGSI_HAPUS_VAR = 'edit_fungsi/var_dihapus',
    EDIT_FUNGSI_EDIT_VAR = 'edit_fungsi/var_diedit',
}

