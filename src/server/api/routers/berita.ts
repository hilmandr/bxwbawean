import { eq, ilike, or } from "drizzle-orm";
import { z } from "zod";
import { slugify } from "~/lib/utils";
import { createBeritaRequest, updateBeritaRequest } from "~/lib/validation/berita.validation";
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

    getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.berita.findMany({
    });
  }),

    getBeritaBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.query.berita.findFirst({
        where: eq(berita.slug, input.slug),
      });
    }),

  createBerita: publicProcedure
    .input(createBeritaRequest)
    .mutation(({ input, ctx }) => {
      const slug = slugify(input.judul);

      return ctx.db
        .insert(berita)
        .values({
          ...input,
          thumbnail: input.thumbnail || "",
          slug,
        })
        .returning();
    }),

  updateBerita: publicProcedure
    .input(updateBeritaRequest)
    .mutation(({ input, ctx }) => {
      const slug = slugify(input.judul);

      return ctx.db
        .update(berita)
        .set({
          ...input,
          thumbnail: input.thumbnail || "",
          slug,
        })
        .where(eq(berita.slug, input.slug || ""))
        .returning();
    }),

  deleteBerita: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.db.delete(berita).where(eq(berita.id, input.id));
    }),
});
