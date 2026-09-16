import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { students } from "../identity_access/students.js";
import { checkupBookings } from "./checkupBookings.js";
import { consents } from "../insurance_enroll_claim/consents.js";

export const diagnosticReports = pgTable("diagnostic_reports", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  checkupBookingId: uuid("checkup_booking_id").references(() => checkupBookings.id),
  consentId: uuid("consent_id").references(() => consents.id),
  reportType: text("report_type").notNull(),
  fileUrl: text("file_url").notNull(),
  uploadedAt: timestamp("uploaded_at", { withTimezone: true }).defaultNow().notNull(),
});
