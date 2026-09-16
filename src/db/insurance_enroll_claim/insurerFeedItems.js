import { pgTable, uuid, text, numeric } from "drizzle-orm/pg-core";
import { insurerFeeds } from "./insurerFeeds.js";
import { enrolments } from "./enrolments.js";
import { consents } from "./consents.js";

export const insurerFeedItems = pgTable("insurer_feed_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  feedId: uuid("feed_id").notNull().references(() => insurerFeeds.id),
  enrolmentId: uuid("enrolment_id").notNull().references(() => enrolments.id),
  consentId: uuid("consent_id").notNull().references(() => consents.id),
  action: text("action").notNull(),
  premiumInr: numeric("premium_inr"),
  result: text("result"),
});
