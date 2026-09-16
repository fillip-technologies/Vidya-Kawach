import { pgTable, uuid, text, date, timestamp } from "drizzle-orm/pg-core";
import { schools } from "./schools.js";
import { classes } from "./classes.js";
import { users } from "./users.js";

export const students = pgTable("students", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id")
    .notNull()
    .references(() => schools.id),
  classId: uuid("class_id")
    .notNull()
    .references(() => classes.id),
  admissionNo: text("admission_no").notNull(),
  fullName: text("full_name").notNull(),
  dob: date("dob").notNull(),
  gender: text("gender").notNull(),
  status: text("status").notNull(),
  userId: uuid("user_id")
    .unique()
    .references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
