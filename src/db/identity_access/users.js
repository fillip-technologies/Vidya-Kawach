import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  fullName: text("full_name").notNull(),
  phone: text("phone"),
  email: text("email"),
  preferredLanguage: text("preferred_language"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
