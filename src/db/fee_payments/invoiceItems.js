import { pgTable, uuid, numeric, boolean } from "drizzle-orm/pg-core";
import { invoices } from "./invoices.js";
import { feeHeads } from "./feeHeads.js";
import { plans } from "../insurance_enroll_claim/plans.js";

export const invoiceItems = pgTable("invoice_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  invoiceId: uuid("invoice_id").notNull().references(() => invoices.id),
  feeHeadId: uuid("fee_head_id").references(() => feeHeads.id),
  planId: uuid("plan_id").references(() => plans.id),
  amountInr: numeric("amount_inr").notNull(),
  isWelfare: boolean("is_welfare").notNull().default(false),
});
