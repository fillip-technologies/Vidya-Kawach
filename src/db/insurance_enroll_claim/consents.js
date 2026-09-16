import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "../identity_access/users.js";
import { students } from "../identity_access/students.js";

export const consents = pgTable("consents", {
  id: uuid("id").primaryKey().defaultRandom(),
  guardianUserId: uuid("guardian_user_id").notNull().references(() => users.id),
  studentId: uuid("student_id").notNull().references(() => students.id),
  purpose: text("purpose").notNull(),
  consentTextVersion: text("consent_text_version"),
  channel: text("channel"),
  ipAddress: text("ip_address"),
  grantedAt: timestamp("granted_at", { withTimezone: true }).defaultNow().notNull(),
  revokedAt: timestamp("revoked_at", { withTimezone: true }),
});
