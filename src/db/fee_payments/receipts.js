import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { payments } from "./payments.js";

export const receipts = pgTable("receipts", {
  id: uuid("id").primaryKey().defaultRandom(),
  paymentId: uuid("payment_id").notNull().unique().references(() => payments.id),
  receiptNo: text("receipt_no").notNull().unique(),
  pdfUrl: text("pdf_url"),
  issuedAt: timestamp("issued_at", { withTimezone: true }).defaultNow().notNull(),
});
