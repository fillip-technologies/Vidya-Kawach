import { pgTable, uuid, text, numeric, timestamp } from "drizzle-orm/pg-core";
import { students } from "../identity_access/students.js";
import { olympiadAttempts } from "./olympiadAttempts.js";

export const scholarshipCredits = pgTable("scholarship_credits", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  attemptId: uuid("attempt_id").notNull().unique().references(() => olympiadAttempts.id),
  amountInr: numeric("amount_inr").notNull(),
  status: text("status").notNull(),
  awardedAt: timestamp("awarded_at", { withTimezone: true }),
});
