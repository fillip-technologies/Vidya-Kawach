import { pgTable, uuid, text, integer } from "drizzle-orm/pg-core";
import { schools } from "./schools.js";
import { users } from "./users.js";

export const classes = pgTable("classes", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id").notNull().references(() => schools.id),
  grade: integer("grade").notNull(),
  section: text("section").notNull(),
  band: text("band").notNull(),
  academicYear: text("academic_year").notNull(),
  classTeacherId: uuid("class_teacher_id").notNull().references(() => users.id),
});
