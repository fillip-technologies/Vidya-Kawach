import { pgTable, uuid, text, boolean } from "drizzle-orm/pg-core";
import { students } from "./students.js";
import { users } from "./users.js";

export const studentGuardians = pgTable("student_guardians", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id")
    .notNull()
    .references(() => students.id),
  guardianUserId: uuid("guardian_user_id")
    .notNull()
    .references(() => users.id),
  relationship: text("relationship").notNull(),
  isPrimary: boolean("is_primary").notNull().default(false),
});
