import {z} from "zod"

// Create
export const createLaporanHarianRequest = z.object({
    tanggal: z.date(),
    link: z.string().min(1, {
        message: "Form tidak boleh kosong!",
    })
})

export type CreateLaporanHarianRequest = z.infer<typeof createLaporanHarianRequest>;