import { pgTable, uuid, text, date, timestamp } from "drizzle-orm/pg-core";
import { enrolments } from "./enrolments.js";

export const ecards = pgTable("ecards", {
  id: uuid("id").primaryKey().defaultRandom(),
  enrolmentId: uuid("enrolment_id").notNull().unique().references(() => enrolments.id),
  cardNumber: text("card_number"),
  pdfUrl: text("pdf_url"),
  validFrom: date("valid_from"),
  validTo: date("valid_to"),
  issuedAt: timestamp("issued_at", { withTimezone: true }).defaultNow().notNull(),
});
