import { pgTable, uuid, text, date, boolean, timestamp } from "drizzle-orm/pg-core";
import { classes } from "../identity_access/classes.js";
import { students } from "../identity_access/students.js";
import { users } from "../identity_access/users.js";

export const attendanceRecords = pgTable("attendance_records", {
  id: uuid("id").primaryKey().defaultRandom(),
  classId: uuid("class_id").notNull().references(() => classes.id),
  studentId: uuid("student_id").notNull().references(() => students.id),
  date: date("date").notNull(),
  status: text("status").notNull(),
  markedBy: uuid("marked_by").notNull().references(() => users.id),
  parentNotified: boolean("parent_notified").notNull().default(false),
  markedAt: timestamp("marked_at", { withTimezone: true }).defaultNow().notNull(),
});
