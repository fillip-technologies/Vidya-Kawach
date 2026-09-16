import { pgTable, uuid, text, numeric, date, timestamp } from "drizzle-orm/pg-core";
import { schools } from "../identity_access/schools.js";
import { students } from "../identity_access/students.js";

export const invoices = pgTable("invoices", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id").notNull().references(() => schools.id),
  studentId: uuid("student_id").notNull().references(() => students.id),
  invoiceNo: text("invoice_no").notNull().unique(),
  totalInr: numeric("total_inr").notNull(),
  dueDate: date("due_date"),
  status: text("status").notNull(),
  aggregatorOrderId: text("aggregator_order_id"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
