import { pgTable, uuid, text, numeric, timestamp } from "drizzle-orm/pg-core";
import { invoices } from "./invoices.js";

export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  invoiceId: uuid("invoice_id").notNull().references(() => invoices.id),
  aggregator: text("aggregator"),
  aggregatorPaymentId: text("aggregator_payment_id"),
  amountInr: numeric("amount_inr").notNull(),
  method: text("method"),
  settlementRoute: text("settlement_route"),
  status: text("status").notNull(),
  paidAt: timestamp("paid_at", { withTimezone: true }),
});
