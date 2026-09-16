import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const schools = pgTable("schools", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  board: text("board").notNull(),
  udiseCode: text("udise_code"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  pincode: text("pincode"),
  aggregatorAccountId: text("aggregator_account_id"),
  status: text("status").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
