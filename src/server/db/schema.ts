import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const berita = pgTable("berita", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug").notNull(),
  konten: varchar("konten").notNull(),
  summary: varchar("summary").notNull(),
  judul: varchar("judul").notNull(),
  penulis: varchar("penulis").notNull(),
  thumbnail: varchar("thumbnail").notNull(),
  tanggal: timestamp("tanggal").notNull(),
});

export type Berita = InferSelectModel<typeof berita>;
export type NewBerita = InferInsertModel<typeof berita>;
