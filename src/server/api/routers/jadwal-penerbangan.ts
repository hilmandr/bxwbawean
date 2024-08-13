import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { eq, or } from "drizzle-orm";
import { jadwalPenerbangan } from "~/server/db/schema";
import { createJadwalPenerbanganRequest } from "~/lib/validation/jadwal-penerbangan.validation";

export const jadwalPenerbanganRouter = createTRPCRouter({
    getDeparture: publicProcedure
        .input(z.object({ search: z.string() }))
        .query(({ input, ctx }) => {
            return ctx.db.query.jadwalPenerbangan.findMany({
                where: or(
                    eq(jadwalPenerbangan.status, "Departure") 
                )
            })
        }),
    getArrival: publicProcedure
        .input(z.object({ search: z.string() }))
        .query(({ input, ctx }) => {
            return ctx.db.query.jadwalPenerbangan.findMany({
                where: or(
                    eq(jadwalPenerbangan.status, "Arrival") 
                )
            })
        }),

    deleteDeparture: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(({ input, ctx }) => {
            return ctx.db.delete(jadwalPenerbangan).where(eq(jadwalPenerbangan.id, input.id));
        }),

    createJadwalPenerbangan: publicProcedure
        .input(createJadwalPenerbanganRequest)
        .mutation(({ input, ctx }) => {
            return ctx.db
                .insert(jadwalPenerbangan)
                .values({
                    ...input,
                })
                .returning();
        }),

})