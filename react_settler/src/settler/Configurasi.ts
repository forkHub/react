import { EBarang } from "./enum";

export const conf = {
    sumur: {
        produksi: {
            waktu: 20
        }
    },

    pinus: {
        produksi: {
            waktu: 30
        },
        bahan: [
            EBarang.air
        ]
    }
}