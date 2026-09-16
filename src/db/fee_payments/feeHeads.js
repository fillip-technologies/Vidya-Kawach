import { pgTable, uuid, text, numeric } from "drizzle-orm/pg-core";
import { schools } from "../identity_access/schools.js";
import { classes } from "../identity_access/classes.js";

export const feeHeads = pgTable("fee_heads", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id").notNull().references(() => schools.id),
  classId: uuid("class_id").references(() => classes.id),
  headType: text("head_type").notNull(),
  amountInr: numeric("amount_inr").notNull(),
  frequency: text("frequency"),
  academicYear: text("academic_year").notNull(),
});
