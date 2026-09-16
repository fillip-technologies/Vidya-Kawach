import { pgTable, uuid, text, integer, boolean, jsonb } from "drizzle-orm/pg-core";

export const games = pgTable("games", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  engine: text("engine").notNull(),
  band: text("band"),
  subject: text("subject"),
  config: jsonb("config"),
  version: integer("version").notNull().default(1),
  isActive: boolean("is_active").notNull().default(true),
});
