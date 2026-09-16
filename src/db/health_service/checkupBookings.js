import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { enrolments } from "../insurance_enroll_claim/enrolments.js";
import { students } from "../identity_access/students.js";

export const checkupBookings = pgTable("checkup_bookings", {
  id: uuid("id").primaryKey().defaultRandom(),
  enrolmentId: uuid("enrolment_id").notNull().references(() => enrolments.id),
  studentId: uuid("student_id").notNull().references(() => students.id),
  providerRef: text("provider_ref"),
  scheduledAt: timestamp("scheduled_at", { withTimezone: true }),
  status: text("status").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
