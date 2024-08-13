import { z } from "zod";

// Create
export const createPesanRequest = z.object({
    nama: z.string().min(1, {
        message: "Form tidak boleh kosong!"
    }),
    email: z.string().min(1, {
        message: "Form tidak boleh kosong!"
    }),
    telepon: z.string().min(1, {
        message: "Form tidak boleh kosong!"
    }),
    pesan: z.string().min(1, {
        message: "Form tidak boleh kosong!"
    }),
    tanggal: z.date()
})

export type CreatePesanRequest = z.infer<typeof createPesanRequest>