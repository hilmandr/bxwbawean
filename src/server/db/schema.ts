import { time } from "console";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, varchar, timestamp, date } from "drizzle-orm/pg-core";

// Berita Schema

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


// Laporan Harian Schema

export const laporanHarian = pgTable("laporan_harian", {
  id: uuid("id").defaultRandom().primaryKey(),
  tanggal: timestamp("tanggal").notNull(),
  link: varchar("link").notNull(),
})

export type LaporanHarian = InferSelectModel<typeof laporanHarian>
export type NewLaporanHarian = InferInsertModel<typeof laporanHarian>

// Jadwal Penerbangan Schema

export const jadwalPenerbangan = pgTable("jadwal_penerbangan", {
  id: uuid("id").defaultRandom().primaryKey(),
  status: varchar("status").notNull(),
  tanggal: timestamp("tanggal").notNull(),
  jam: varchar("jam").notNull(),
  kota: varchar("kota").notNull(),
  maskapai: varchar("maskapai").notNull(),
})

export type JadwalPenerbangan = InferSelectModel<typeof jadwalPenerbangan>
export type NewJadwalPenerbangan = InferInsertModel<typeof jadwalPenerbangan>

// Kontak Pesan
export const pesan = pgTable("pesan", {
  id: uuid("id").primaryKey().defaultRandom(),
  tanggal: timestamp("tanggal").notNull(),
  nama: varchar("nama").notNull(),
  email: varchar("email").notNull(),
  telepon: varchar("telepon").notNull(),
  pesan: varchar("pesan").notNull(),
})

export type Pesan = InferSelectModel<typeof pesan>
export type NewPesan = InferInsertModel<typeof pesan>


export const user = pgTable("user", {
  id: varchar("id").primaryKey(),
  username: varchar("username").notNull(),
  password: varchar("password").notNull(),
});

export type User = InferSelectModel<typeof user>;