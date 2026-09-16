import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { schools } from "./schools.js";

export const brandingProfiles = pgTable("branding_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  schoolId: uuid("school_id").notNull().unique().references(() => schools.id),
  displayName: text("display_name"),
  logoUrl: text("logo_url"),
  primaryColor: text("primary_color"),
  secondaryColor: text("secondary_color"),
  isPublished: boolean("is_published").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
});
