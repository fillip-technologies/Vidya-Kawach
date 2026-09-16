import { pgTable, uuid, text, numeric, integer, date, timestamp } from "drizzle-orm/pg-core";

export const insurerFeeds = pgTable("insurer_feeds", {
  id: uuid("id").primaryKey().defaultRandom(),
  feedType: text("feed_type").notNull(),
  periodStart: date("period_start"),
  periodEnd: date("period_end"),
  fileUrl: text("file_url"),
  recordCount: integer("record_count").notNull().default(0),
  totalPremiumInr: numeric("total_premium_inr"),
  status: text("status").notNull(),
  sentAt: timestamp("sent_at", { withTimezone: true }),
  acknowledgedAt: timestamp("acknowledged_at", { withTimezone: true }),
});
