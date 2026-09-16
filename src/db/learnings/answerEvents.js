import { pgTable, uuid, boolean, integer, timestamp } from "drizzle-orm/pg-core";
import { students } from "../identity_access/students.js";
import { games } from "./games.js";
import { syllabusTags } from "./syllabusTags.js";

export const answerEvents = pgTable("answer_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  gameId: uuid("game_id").notNull().references(() => games.id),
  syllabusTagId: uuid("syllabus_tag_id").references(() => syllabusTags.id),
  isCorrect: boolean("is_correct").notNull(),
  responseMs: integer("response_ms"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
