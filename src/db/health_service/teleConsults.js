import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { students } from "../identity_access/students.js";
import { users } from "../identity_access/users.js";

export const teleConsults = pgTable("tele_consults", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  requestedBy: uuid("requested_by").notNull().references(() => users.id),
  consultType: text("consult_type"),
  providerRef: text("provider_ref"),
  status: text("status").notNull(),
  callbackAt: timestamp("callback_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
