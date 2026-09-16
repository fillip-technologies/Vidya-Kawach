import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { students } from "../identity_access/students.js";
import { examSchemas } from "./examSchemas.js";

export const reportCards = pgTable("report_cards", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").notNull().references(() => students.id),
  examSchemaId: uuid("exam_schema_id").notNull().references(() => examSchemas.id),
  overallGrade: text("overall_grade"),
  pdfUrl: text("pdf_url"),
  generatedAt: timestamp("generated_at", { withTimezone: true }).defaultNow().notNull(),
});
