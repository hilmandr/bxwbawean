import { ilike, or } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { berita } from "~/server/db/schema";

export const beritaRouter = createTRPCRouter({
  getBeritaItems: publicProcedure
    .input(z.object({ search: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.query.berita.findMany({
        where: input.search
          ? or(
              ilike(berita.judul, `%${input.search}%`),
              ilike(berita.penulis, `%${input.search}%`),
            )
          : undefined,
      });
    }),
});
