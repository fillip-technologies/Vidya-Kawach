import { pgTable, uuid, text, integer } from "drizzle-orm/pg-core";

export const syllabusTags = pgTable("syllabus_tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  board: text("board").notNull(),
  grade: integer("grade").notNull(),
  subject: text("subject").notNull(),
  topic: text("topic").notNull(),
});
