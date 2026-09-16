import { pgTable, uuid, text, jsonb, timestamp } from "drizzle-orm/pg-core";
import { users } from "../identity_access/users.js";

export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id),
  channel: text("channel").notNull(),
  template: text("template"),
  payload: jsonb("payload"),
  status: text("status").notNull(),
  sentAt: timestamp("sent_at", { withTimezone: true }),
});
