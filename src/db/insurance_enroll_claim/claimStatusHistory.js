import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { claims } from "./claims.js";
import { users } from "../identity_access/users.js";

export const claimStatusHistory = pgTable("claim_status_history", {
  id: uuid("id").primaryKey().defaultRandom(),
  claimId: uuid("claim_id").notNull().references(() => claims.id),
  fromStatus: text("from_status"),
  toStatus: text("to_status").notNull(),
  note: text("note"),
  changedBy: uuid("changed_by").notNull().references(() => users.id),
  changedAt: timestamp("changed_at", { withTimezone: true }).defaultNow().notNull(),
});
