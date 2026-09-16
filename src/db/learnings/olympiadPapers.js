import { pgTable, uuid, text, integer, date, timestamp } from "drizzle-orm/pg-core";

export const olympiadPapers = pgTable("olympiad_papers", {
  id: uuid("id").primaryKey().defaultRandom(),
  board: text("board"),
  grade: integer("grade").notNull(),
  month: date("month"),
  title: text("title").notNull(),
  durationMin: integer("duration_min"),
  startsAt: timestamp("starts_at", { withTimezone: true }),
  endsAt: timestamp("ends_at", { withTimezone: true }),
  status: text("status").notNull(),
});
