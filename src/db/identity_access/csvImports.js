import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";
import { schools } from "./schools.js";
import { users } from "./users.js";

export const csvImports = pgTable("csv_imports", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id").notNull().references(() => schools.id),
  uploadedBy: uuid("uploaded_by").notNull().references(() => users.id),
  importType: text("import_type").notNull(),
  fileUrl: text("file_url").notNull(),
  rowsTotal: integer("rows_total").notNull().default(0),
  rowsFailed: integer("rows_failed").notNull().default(0),
  status: text("status").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
