import {z} from "zod"

// Create
export const createJadwalPenerbanganRequest = z.object({
    status: z.string().min(1, {
        message: "Form tidak boleh kosong!",
    }),
    tanggal: z.date(),
    jam: z.string(),
    kota: z.string().min(1, {
        message: "Form tidak boleh kosong!",
    }),
    maskapai: z.string().min(1, {
        message: "Form tidak boleh kosong!",
    })
})

export type CreateJadwalPenerbanganRequest = z.infer<typeof createJadwalPenerbanganRequest>;