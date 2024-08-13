import { createPesanRequest } from "~/lib/validation/pesan.validation";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { pesan } from "~/server/db/schema";
import { Search } from "lucide-react";
import { z } from "zod";
import { eq, ilike, or } from "drizzle-orm";

export const pesanRouter = createTRPCRouter({
    createPesan: publicProcedure
        .input(createPesanRequest)
        .mutation(({ input, ctx }) => {
            return ctx.db
                .insert(pesan)
                .values({
                    ...input
                })
                .returning()
        }),

    getPesan: publicProcedure
        .input(z.object({ search: z.string() }))
        .query(({ input, ctx }) => {
            return ctx.db.query.pesan.findMany({
                where: input.search ?
                or(ilike(pesan.nama, `%${input.search}%`))
                :undefined
            })
        })
})