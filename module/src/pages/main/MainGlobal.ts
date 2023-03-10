class MainGlobal {
    private _modulDipilihId: number = 0;

    public get modulDipilihId(): number {
        return this._modulDipilihId;
    }
    public set modulDipilihId(value: number) {
        this._modulDipilihId = value;
    }
}

export const mainGlobal: MainGlobal = new MainGlobal();