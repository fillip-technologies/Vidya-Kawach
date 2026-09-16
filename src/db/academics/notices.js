import { pgTable, uuid, text, jsonb, timestamp } from "drizzle-orm/pg-core";
import { schools } from "../identity_access/schools.js";
import { classes } from "../identity_access/classes.js";
import { users } from "../identity_access/users.js";

export const notices = pgTable("notices", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id").notNull().references(() => schools.id),
  classId: uuid("class_id").references(() => classes.id),
  noticeType: text("notice_type").notNull(),
  title: text("title").notNull(),
  body: text("body").notNull(),
  attachments: jsonb("attachments"),
  postedBy: uuid("posted_by").notNull().references(() => users.id),
  postedAt: timestamp("posted_at", { withTimezone: true }).defaultNow().notNull(),
});
