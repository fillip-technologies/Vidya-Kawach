import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { students } from "../identity_access/students.js";

export const aiInteractions = pgTable("ai_interactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  assistant: text("assistant").notNull(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  sessionId: text("session_id"),
  question: text("question").notNull(),
  answer: text("answer"),
  wasRefused: boolean("was_refused").notNull().default(false),
  answerSource: text("answer_source"),
  reviewStatus: text("review_status"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }),
});
