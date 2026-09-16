import { pgTable, uuid, text, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { payments } from "./payments.js";

export const paymentEvents = pgTable("payment_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  paymentId: uuid("payment_id").notNull().references(() => payments.id),
  eventType: text("event_type").notNull(),
  payload: jsonb("payload"),
  signatureVerified: boolean("signature_verified"),
  receivedAt: timestamp("received_at", { withTimezone: true }).defaultNow().notNull(),
});

