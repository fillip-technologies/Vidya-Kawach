import { pgTable, uuid, text, numeric, timestamp } from "drizzle-orm/pg-core";
import { examSchemas } from "./examSchemas.js";
import { students } from "../identity_access/students.js";
import { users } from "../identity_access/users.js";

export const markEntries = pgTable("mark_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  examSchemaId: uuid("exam_schema_id").notNull().references(() => examSchemas.id),
  studentId: uuid("student_id").notNull().references(() => students.id),
  subject: text("subject").notNull(),
  maxMarks: numeric("max_marks"),
  marksObtained: numeric("marks_obtained"),
  grade: text("grade"),
  enteredBy: uuid("entered_by").notNull().references(() => users.id),
  enteredAt: timestamp("entered_at", { withTimezone: true }).defaultNow().notNull(),
});
