import { pgTable, uuid, text, numeric, integer, boolean, date, jsonb } from "drizzle-orm/pg-core";

export const plans = pgTable("plans", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: text("code").notNull().unique(),
  name: text("name").notNull(),
  priceInr: numeric("price_inr").notNull(),
  feeProtectionCoverInr: numeric("fee_protection_cover_inr"),
  medicalCoverInr: numeric("medical_cover_inr"),
  benefits: jsonb("benefits"),
  exclusions: jsonb("exclusions"),
  waitingPeriodDays: integer("waiting_period_days"),
  version: integer("version").notNull().default(1),
  isActive: boolean("is_active").notNull().default(true),
  effectiveFrom: date("effective_from"),
});
