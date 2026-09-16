import { pgTable, uuid, text, numeric, date, timestamp } from "drizzle-orm/pg-core";
import { students } from "../identity_access/students.js";
import { users } from "../identity_access/users.js";
import { plans } from "./plans.js";
import { consents } from "./consents.js";
import { invoices } from "../fee_payments/invoices.js";

export const enrolments = pgTable("enrolments", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  planId: uuid("plan_id").notNull().references(() => plans.id),
  guardianUserId: uuid("guardian_user_id").notNull().references(() => users.id),
  consentId: uuid("consent_id").notNull().references(() => consents.id),
  invoiceId: uuid("invoice_id").references(() => invoices.id),
  source: text("source"),
  premiumInr: numeric("premium_inr").notNull(),
  status: text("status").notNull(),
  startDate: date("start_date"),
  endDate: date("end_date"),
  cancelledAt: timestamp("cancelled_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
