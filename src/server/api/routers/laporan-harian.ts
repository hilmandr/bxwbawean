import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { eq, ilike, or } from "drizzle-orm";
import { laporanHarian } from "~/server/db/schema";
import { createLaporanHarianRequest } from "~/lib/validation/laporan-harian.validation";

export const laporanHarianRouter = createTRPCRouter({
    getLaporanHarian: publicProcedure
        .input(z.object({ search: z.string(), created_at: z.date().optional()}))
        .query(({ input, ctx }) => {
            return ctx.db.query.laporanHarian.findMany({
                where: or(
                    input.created_at && eq(laporanHarian.tanggal, input.created_at)
                )
            })
        }),
        
    getLaporanbyDate: publicProcedure
        .input(z.object({ tanggal: z.date()}))
        .query(({ input, ctx }) => {
            return ctx.db.query.laporanHarian.findFirst({
                where: eq(laporanHarian.tanggal, input.tanggal),
            })
        }),

    createLaporanHarian: publicProcedure
        .input(createLaporanHarianRequest)
        .mutation(({ input, ctx }) => {
            return ctx.db
                .insert(laporanHarian)
                .values({
                    ...input,
                })
                .returning();
        }),

    deleteLaporanHarian: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(({ input, ctx }) => {
            return ctx.db.delete(laporanHarian).where(eq(laporanHarian.id, input.id));
        }),

})