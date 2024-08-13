import { z } from "zod";

export const login = z.object({
  username: z.string().min(1, {
    message: "Form tidak boleh kosong.",
  }),
  password: z.string().min(1, {
    message: "Form tidak boleh kosong.",
  }),
});
export type LoginValidation = z.infer<typeof login>;
