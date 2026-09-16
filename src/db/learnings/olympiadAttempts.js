import { pgTable, uuid, numeric, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { olympiadPapers } from "./olympiadPapers.js";
import { students } from "../identity_access/students.js";

export const olympiadAttempts = pgTable("olympiad_attempts", {
  id: uuid("id").primaryKey().defaultRandom(),
  paperId: uuid("paper_id").notNull().references(() => olympiadPapers.id),
  studentId: uuid("student_id").notNull().references(() => students.id),
  answers: jsonb("answers"),
  score: numeric("score"),
  rank: integer("rank"),
  startedAt: timestamp("started_at", { withTimezone: true }),
  submittedAt: timestamp("submitted_at", { withTimezone: true }),
});
