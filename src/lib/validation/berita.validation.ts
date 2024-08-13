import { z } from "zod";

// Create
export const createBeritaRequest = z.object({
  judul: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  tanggal: z.date(),
  penulis: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  summary: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  konten: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  thumbnail: z.string().optional(),
});
export type CreateBeritaRequest = z.infer<typeof createBeritaRequest>;

// Update
export const updateBeritaRequest = z.object({
  slug: z.string().optional(),
  judul: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  tanggal: z.date(),
  penulis: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  summary: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  konten: z.string().min(1, {
    message: "Form tidak boleh kosong!",
  }),
  thumbnail: z.string().optional(),
});
export type UpdateBeritaRequest = z.infer<typeof updateBeritaRequest>;