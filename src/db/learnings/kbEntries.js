import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";
import { syllabusTags } from "./syllabusTags.js";
import { users } from "../identity_access/users.js";

export const kbEntries = pgTable("kb_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  syllabusTagId: uuid("syllabus_tag_id").notNull().references(() => syllabusTags.id),
  entryType: text("entry_type").notNull(),
  content: text("content").notNull(),
  hintLevel: integer("hint_level"),
  status: text("status").notNull(),
  version: integer("version").notNull().default(1),
  updatedBy: uuid("updated_by").notNull().references(() => users.id),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
