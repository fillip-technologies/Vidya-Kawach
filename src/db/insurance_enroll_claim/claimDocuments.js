import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { claims } from "./claims.js";
import { users } from "../identity_access/users.js";

export const claimDocuments = pgTable("claim_documents", {
  id: uuid("id").primaryKey().defaultRandom(),
  claimId: uuid("claim_id").notNull().references(() => claims.id),
  docType: text("doc_type").notNull(),
  fileUrl: text("file_url").notNull(),
  uploadedBy: uuid("uploaded_by").notNull().references(() => users.id),
  uploadedAt: timestamp("uploaded_at", { withTimezone: true }).defaultNow().notNull(),
});
