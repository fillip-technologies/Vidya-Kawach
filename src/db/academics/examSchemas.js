import { pgTable, uuid, text, jsonb } from "drizzle-orm/pg-core";
import { schools } from "../identity_access/schools.js";

export const examSchemas = pgTable("exam_schemas", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id").notNull().references(() => schools.id),
  board: text("board"),
  name: text("name").notNull(),
  term: text("term"),
  academicYear: text("academic_year").notNull(),
  gradingScheme: jsonb("grading_scheme"),
});
