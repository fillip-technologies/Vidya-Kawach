import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "../identity_access/users.js";
import { students } from "../identity_access/students.js";

export const deletionRequests = pgTable("deletion_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  requestedBy: uuid("requested_by").notNull().references(() => users.id),
  studentId: uuid("student_id").notNull().references(() => students.id),
  status: text("status").notNull(),
  requestedAt: timestamp("requested_at", { withTimezone: true }).defaultNow().notNull(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
});
