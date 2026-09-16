import { pgTable, uuid, text, numeric, date, timestamp } from "drizzle-orm/pg-core";
import { enrolments } from "./enrolments.js";
import { users } from "../identity_access/users.js";

export const claims = pgTable("claims", {
  id: uuid("id").primaryKey().defaultRandom(),
  enrolmentId: uuid("enrolment_id").notNull().references(() => enrolments.id),
  claimantUserId: uuid("claimant_user_id").notNull().references(() => users.id),
  claimType: text("claim_type").notNull(),
  status: text("status").notNull(),
  incidentDate: date("incident_date"),
  amountClaimedInr: numeric("amount_claimed_inr"),
  amountSettledInr: numeric("amount_settled_inr"),
  beneficiaryType: text("beneficiary_type"),
  beneficiaryName: text("beneficiary_name"),
  beneficiaryAccountToken: text("beneficiary_account_token"),
  submittedAt: timestamp("submitted_at", { withTimezone: true }),
  settledAt: timestamp("settled_at", { withTimezone: true }),
});
